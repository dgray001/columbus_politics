#!/usr/bin/env bash
# Reproduces docs/resources/columbus-city-charter.pdf and
# docs/resources/columbus-ordinances.pdf from the full Columbus, OH Code of
# Ordinances PDF.
#
# Source: https://library.municode.com/oh/columbus/codes/code_of_ordinances?nodeId=16219
#
# Municode does not offer a stable public download URL for the full PDF (its
# download links are session-signed and expire). To re-run this:
#   1. Go to the source URL above
#   2. Use the site's "Download" feature to get the full PDF
#   3. Save it as columbus_code_full.pdf next to this script
#   4. Run: ./extract_columbus_code.sh
#   5. Update the retrievedDate/sourceUrl fields in src/scripts/resources.ts
#
# Page ranges below were located by scanning for the "CHARTER OF THE" /
# "Title N" / back-matter "TABLES" headers. Municode occasionally reflows
# page numbers between supplements, so re-verify these ranges (e.g. via
# pdftotext) rather than assuming they still hold on a later download.

set -euo pipefail

SOURCE="columbus_code_full.pdf"
OUT_DIR="docs/resources"

if ! command -v qpdf &> /dev/null; then
  echo "qpdf is required (e.g. 'pacman -S qpdf' / 'apt install qpdf')" >&2
  exit 1
fi

if [ ! -f "$SOURCE" ]; then
  echo "Missing $SOURCE - see instructions in this script's header comment." >&2
  exit 1
fi

# Charter: title page + table of contents + full body (Preamble - Sec. 235)
# + the charter's own alphabetical index, ending just before Title 1 starts.
qpdf --empty --pages "$SOURCE" 175-231 -- "$OUT_DIR/columbus-city-charter.pdf"

# Ordinances: Title 1 through the end of Title 45, excluding the trailing
# comparative-section tables / disposition lists / master index.
qpdf --empty --pages "$SOURCE" 233-2238 -- "$OUT_DIR/columbus-ordinances.pdf"

echo "Wrote $OUT_DIR/columbus-city-charter.pdf and $OUT_DIR/columbus-ordinances.pdf"
