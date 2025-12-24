import { io } from 'socket.io-client';

export function getSocketUrl() {
  // For Cloudflare Pages (CRA), env vars must start with REACT_APP_ and are baked at build time.
  // If not set, we intentionally run in offline/demo mode.
  return process.env.REACT_APP_SOCKET_URL || '';
}

export function createSocket() {
  const url = getSocketUrl();
  if (!url) return null;

  // Avoid hard-failing the app if the backend is unreachable.
  try {
    return io(url, {
      transports: ['websocket', 'polling'],
      autoConnect: true,
      reconnection: true,
      timeout: 5000,
    });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn('Socket init failed; falling back to offline mode.', e);
    return null;
  }
}

