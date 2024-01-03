import { FC } from "hono/jsx";
import { Layout } from "./layout.tsx";
import { Suspense } from "hono/jsx/streaming";
import { MaybePromise, toPercents } from "./utils.ts";
import { TokenOption } from "./backend.ts";

export interface MainPageProps {
  initialText?: string;
  options?: MaybePromise<TokenOption[]>;
}

const Options = async (
  { options }: { options: MaybePromise<TokenOption[]> },
) => {
  const opts = await options;
  return (
    <nav gap="2">
      {opts
        .toSorted((a, b) => b.prob - a.prob)
        .map((opt) => (
          <button type="submit" name="token" value={opt.tok_str}>
            {JSON.stringify(opt.tok_str)} ({toPercents(opt.prob)})
          </button>
        ))}
      <button type="submit">&gt;</button>
    </nav>
  );
};

export const MainPage: FC<MainPageProps> = ({ initialText, options = [] }) => (
  <Layout>
    <form method="post">
      <textarea name="context">{initialText}</textarea>
      <Suspense fallback={<p aria-busy="true">Generating...</p>}>
        <Options options={options} />
      </Suspense>
    </form>
  </Layout>
);
