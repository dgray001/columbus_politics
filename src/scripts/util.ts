/** Relative path prefix to reach the docs root, read from cbp-header's base attribute */
export function siteBase(): string {
  return document.querySelector('cbp-header')?.getAttribute('base') ?? '';
}

/** Polls condition until true, then resolves */
export function until(condition: () => boolean, poll_timer = 50): Promise<void> {
  const poll = (resolve: () => void) => {
    if (condition()) {
      resolve();
    } else {
      setTimeout(() => poll(resolve), poll_timer);
    }
  };
  return new Promise<void>(poll);
}
