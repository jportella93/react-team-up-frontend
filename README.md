# react-team-up-frontend
Client for a web game platform meant to be played in public screens, where players have to team up against other players in the spot.

## Deployment notes (portfolio/demo)

This is **client-side** code and is suitable for **Cloudflare Pages**.

- **Build output directory**: `build`
- **Build command**: `npm run build`

### Online vs offline/demo mode

This app was originally designed to connect to a Socket.IO backend. For deployment, the backend URL is now configurable:

- **Online mode**: set `REACT_APP_SOCKET_URL` at build time (Cloudflare Pages environment variables)
  - Example: `REACT_APP_SOCKET_URL=https://your-socket-backend.example`
- **Offline/demo mode**: if `REACT_APP_SOCKET_URL` is not set, the app runs without a backend and lets you start an offline demo game.
  - Controls: **W/S** for the left paddle, **↑/↓** for the right paddle.
