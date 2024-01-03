import { FC } from "hono/middleware.ts";

export const Layout: FC = ({ children }) => (
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Human Supervised Sampling Demo</title>
      <link
        rel="stylesheet"
        href="https://unpkg.com/@picocss/pico@2.0.0-rc1/css/pico.classless.min.css"
      />
      <script src="https://unpkg.com/@unocss/runtime/attributify.global.js" />
    </head>
    <body>
      <header>
        <h1>Human Supervised Sampling Demo</h1>
      </header>
      <main>{children}</main>
    </body>
  </html>
);
