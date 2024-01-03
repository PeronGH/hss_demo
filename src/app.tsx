import { Hono } from "hono/mod.ts";
import { MainPage } from "./page.tsx";
import { jsxRenderer } from "hono/middleware.ts";
import { llamaCppNextToken } from "./backend.ts";

export const app = new Hono();

app.use(
  "/",
  jsxRenderer(({ children }) => <>{children}</>, {
    docType: true,
    stream: true,
  }),
);

app.get(
  "/",
  (c) => c.render(<MainPage />),
);

app.post(
  "/",
  async (c) => {
    const params = new URLSearchParams(await c.req.text());
    const context = params.get("context") ?? "";
    const token = params.get("token") ?? "";

    const initialText = context + token;
    const options = llamaCppNextToken(initialText);

    return c.render(
      <MainPage initialText={initialText} options={options} />,
    );
  },
);
