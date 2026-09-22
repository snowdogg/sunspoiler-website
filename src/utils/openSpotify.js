function isInAppBrowser() {
  const ua = window.navigator.userAgent || '';
  return /FBAN|FBAV|Instagram/i.test(ua);
}

export function openSpotifyWithFallback({ uri, webUrl, fallbackDelay = 1750 }) {
  if (!isInAppBrowser()) {
    // open.spotify.com is a Universal Link: this opens the Spotify app directly
    // when installed, and the web player otherwise, with no custom scheme needed.
    window.location.href = webUrl;
    return;
  }

  // Instagram/Facebook in-app browsers block Universal Links, so fall back to
  // attempting the custom URI scheme directly, which they do respect.
  let settled = false;

  const cleanup = () => {
    document.removeEventListener('visibilitychange', onHide);
    window.removeEventListener('pagehide', onHide);
  };

  const onHide = () => {
    settled = true;
    cleanup();
  };

  document.addEventListener('visibilitychange', onHide);
  window.addEventListener('pagehide', onHide);

  window.setTimeout(() => {
    if (settled) return;
    cleanup();
    if (document.visibilityState !== 'hidden') {
      window.location.href = webUrl;
    }
  }, fallbackDelay);

  window.location.href = uri;
}
