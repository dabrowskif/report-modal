import { createProxyMiddleware } from 'http-proxy-middleware';

export const proxy = (app: any): any => {
  app.use(
    createProxyMiddleware('/post', {
      target: 'https://postman-echo.com',
      changeOrigin: true,
    }),
  );
};
