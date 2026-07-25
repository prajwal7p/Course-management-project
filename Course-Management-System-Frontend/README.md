# React + Vite

## API configuration

The frontend sends API requests through `/api` while running locally; Vite
proxies those requests to the JSON server at `http://localhost:5000`.

For a deployed build, configure `VITE_API_URL` with the public URL of the
deployed backend before building (for example, in the Vercel environment
variables). Do not set it to `localhost`: in a visitor's browser that points to
their own computer, not the API server.

Start the local backend from `Course-Management-System-Backend` with:

```bash
npm start
```

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
