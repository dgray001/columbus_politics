// @ts-check
'use strict';
export {};

const script_url = new URL(import.meta.url);
const page = script_url.searchParams.get('page');
const base = script_url.searchParams.get('base') ?? '';

const { version } = await import(`./version.js?v=${Math.floor(Date.now() / (1000 * 60 * 60))}`);

/**
 * Injects a bundle script as a Promise to ensure load order
 * @param {string} name
 */
const injectBundle = (name) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.setAttribute('src', `${base}dist/${name}.bundle.js?v=${version}`);
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
};

if (!page) {
  console.error(`Trying to init invalid page: ${page}`);
} else {
  if (page !== 'index') {
    await injectBundle('index');
  }
  await injectBundle(page);
}
