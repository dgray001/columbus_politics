import * as fs from 'fs';
import * as path from 'path';
import MarkdownIt from 'markdown-it';
import type { MarkdownIt as MarkdownItInstance, Token } from 'markdown-it';
import { RESOURCES } from './src/data/resources';
import { CITATIONS } from './src/data/citations';

const SITE_NAME = 'Columbus Politics';
const CONTENT_DIR = path.resolve(__dirname, 'content');
const DOCS_DIR = path.resolve(__dirname, 'docs');

interface FrontMatter {
  extra_resources: string[];
  extra_citations: string[];
  body: string;
}

interface PageContext {
  base: string;
  used_resources: string[];
  used_citations: Map<string, number>;
  warnings: string[];
}

function parseFrontMatter(raw: string): FrontMatter {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!match) {
    return { extra_resources: [], extra_citations: [], body: raw };
  }
  const extra_resources: string[] = [];
  const extra_citations: string[] = [];
  for (const line of match[1].split('\n')) {
    const colon_index = line.indexOf(':');
    if (colon_index === -1) {
      continue;
    }
    const field = line.slice(0, colon_index).trim();
    const keys = line
      .slice(colon_index + 1)
      .split(',')
      .map((key) => key.trim())
      .filter(Boolean);
    if (field === 'resources') {
      extra_resources.push(...keys);
    } else if (field === 'citations') {
      extra_citations.push(...keys);
    }
  }
  return { extra_resources, extra_citations, body: raw.slice(match[0].length) };
}

function findMarkdownFiles(dir: string): string[] {
  const found: string[] = [];
  // eslint-disable-next-line @typescript-eslint/naming-convention -- Node's own fs API option name
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full_path = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      found.push(...findMarkdownFiles(full_path));
    } else if (entry.name.endsWith('.md')) {
      found.push(full_path);
    }
  }
  return found;
}

function registerLinkRewriting(md: MarkdownItInstance, ctx: PageContext): void {
  md.core.ruler.push('cbp_links', (state) => {
    for (const block_token of state.tokens) {
      if (block_token.type !== 'inline' || !block_token.children) {
        continue;
      }
      const children = block_token.children;
      const new_children: Token[] = [];
      let i = 0;
      while (i < children.length) {
        const token = children[i];
        if (token.type !== 'link_open') {
          new_children.push(token);
          i++;
          continue;
        }
        let close_index = i + 1;
        let text = '';
        while (close_index < children.length && children[close_index].type !== 'link_close') {
          if (children[close_index].type === 'text') {
            text += children[close_index].content;
          }
          close_index++;
        }
        const href = String(token.attrGet('href') ?? '');
        if (href.startsWith('cite:')) {
          const key = href.slice('cite:'.length);
          if (!CITATIONS[key]) {
            ctx.warnings.push(`unknown citation key "${key}"`);
          } else {
            if (!ctx.used_citations.has(key)) {
              ctx.used_citations.set(key, ctx.used_citations.size + 1);
            }
            const number = ctx.used_citations.get(key);
            const text_token = new state.Token('text', '', 0);
            text_token.content = text;
            new_children.push(text_token);
            // Footnote markers follow terminal punctuation ("fact.4" not "fact4.").
            const next_token = children[close_index + 1];
            if (next_token && next_token.type === 'text') {
              const punct_match = next_token.content.match(/^[.,;:!?]+/);
              if (punct_match) {
                const punct_token = new state.Token('text', '', 0);
                punct_token.content = punct_match[0];
                new_children.push(punct_token);
                next_token.content = next_token.content.slice(punct_match[0].length);
              }
            }
            const sup_token = new state.Token('html_inline', '', 0);
            sup_token.content = `<sup class="citation-ref"><a href="#cite-${key}">[${number}]</a></sup>`;
            new_children.push(sup_token);
          }
        } else if (href.startsWith('resource:')) {
          const key = href.slice('resource:'.length);
          if (!RESOURCES[key]) {
            ctx.warnings.push(`unknown resource key "${key}"`);
          } else {
            if (!ctx.used_resources.includes(key)) {
              ctx.used_resources.push(key);
            }
            token.attrSet('href', `${ctx.base}${RESOURCES[key].href}`);
            new_children.push(token, ...children.slice(i + 1, close_index + 1));
          }
        } else if (href.startsWith('/')) {
          token.attrSet('href', `${ctx.base}${href.slice(1)}/`);
          new_children.push(token, ...children.slice(i + 1, close_index + 1));
        } else {
          new_children.push(token, ...children.slice(i + 1, close_index + 1));
        }
        i = close_index + 1;
      }
      block_token.children = new_children;
    }
  });
}

function finalizeExtras(ctx: PageContext, extra_resources: string[], extra_citations: string[]): void {
  for (const key of extra_resources) {
    if (!RESOURCES[key]) {
      ctx.warnings.push(`unknown resource key "${key}" in frontmatter`);
      continue;
    }
    if (ctx.used_resources.includes(key)) {
      ctx.warnings.push(`resource "${key}" is both referenced inline and listed in frontmatter`);
      continue;
    }
    ctx.used_resources.push(key);
  }
  for (const key of extra_citations) {
    if (!CITATIONS[key]) {
      ctx.warnings.push(`unknown citation key "${key}" in frontmatter`);
      continue;
    }
    if (ctx.used_citations.has(key)) {
      ctx.warnings.push(`citation "${key}" is both referenced inline and listed in frontmatter`);
      continue;
    }
    ctx.used_citations.set(key, ctx.used_citations.size + 1);
  }
}

function renderResourcesHtml(ctx: PageContext): string {
  if (ctx.used_resources.length === 0) {
    return '';
  }
  const items = ctx.used_resources
    .map((key) => {
      const resource = RESOURCES[key];
      const description = resource.description ? ` &mdash; ${resource.description}` : '';
      return `      <li><a href="${ctx.base}${resource.href}">${resource.label}</a>${description}</li>`;
    })
    .join('\n');
  return `\n    <h2>Resources</h2>\n    <ul class="plain-list">\n${items}\n    </ul>\n`;
}

function renderCitationsHtml(ctx: PageContext): string {
  if (ctx.used_citations.size === 0) {
    return '';
  }
  const entries = [...ctx.used_citations.entries()].sort((a, b) => a[1] - b[1]);
  const items = entries
    .map(([key]) => {
      const citation = CITATIONS[key];
      const href = citation.url.startsWith('http') ? citation.url : `${ctx.base}${citation.url}`;
      return `      <li id="cite-${key}"><a href="${href}">${citation.label}</a></li>`;
    })
    .join('\n');
  return `\n    <h2>Citations</h2>\n    <ol class="citations-list">\n${items}\n    </ol>\n`;
}

function renderShell(opts: {
  active: string;
  active_sub?: string;
  base: string;
  page_slug: string;
  body_html: string;
}): string {
  const sub_attr = opts.active_sub ? ` active-sub="${opts.active_sub}"` : '';
  const base_param = opts.base ? `&base=${opts.base}` : '';
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${SITE_NAME}</title>
  <script type="module" src="${opts.base}scripts/init.js?page=${opts.page_slug}${base_param}"></script>
</head>
<body>
  <cbp-header active="${opts.active}"${sub_attr} base="${opts.base}"></cbp-header>
  <main>
    <h1 id="page-heading"></h1>
${opts.body_html}
  </main>
</body>
</html>
`;
}

function generatePage(file_path: string): void {
  const relative_path = path.relative(CONTENT_DIR, file_path);
  const segments = relative_path.replace(/\.md$/, '').split(path.sep);
  const active = segments[0];
  const active_sub = segments[1];
  const depth = segments.length;
  const base = '../'.repeat(depth);

  const raw = fs.readFileSync(file_path, 'utf8');
  const { extra_resources, extra_citations, body } = parseFrontMatter(raw);

  const ctx: PageContext = { base, used_resources: [], used_citations: new Map(), warnings: [] };
  const md = new MarkdownIt();
  registerLinkRewriting(md, ctx);
  const body_html = md.render(body);
  finalizeExtras(ctx, extra_resources, extra_citations);

  for (const warning of ctx.warnings) {
    console.warn(`generate_pages: ${relative_path}: ${warning}`);
  }

  const full_body = `${body_html}${renderResourcesHtml(ctx)}${renderCitationsHtml(ctx)}`;
  const html = renderShell({ active, active_sub, base, page_slug: active, body_html: full_body });

  const out_dir = path.join(DOCS_DIR, ...segments);
  fs.mkdirSync(out_dir, { recursive: true });
  fs.writeFileSync(path.join(out_dir, 'index.html'), html);
  console.log(`generate_pages: wrote docs/${path.relative(DOCS_DIR, path.join(out_dir, 'index.html'))}`);
}

if (!fs.existsSync(CONTENT_DIR)) {
  console.log('generate_pages: no content/ directory, nothing to do');
} else {
  for (const file of findMarkdownFiles(CONTENT_DIR)) {
    generatePage(file);
  }
}
