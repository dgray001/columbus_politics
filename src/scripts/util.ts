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
