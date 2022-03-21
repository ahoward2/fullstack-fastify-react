# Fullstack react + fastify

> Basic single page react application with an http backend server build with fastify.

## How to run

**Development server**

Concurrently runs the react client with hot reloading and the fastify server. Requests from the client in development are proxied to the server port.

- `Client port`: 3002
- `Go server port`: 8080

```bash
yarn start
```

**Production build**

```bash
yarn build
```

**Start server**

```bash
yarn serve
```

- GET `/hello` route returns a json payload
