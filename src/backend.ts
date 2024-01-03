import { assertExists } from "std/assert/mod.ts";

const BACKEND_API_URL = Deno.env.get("BACKEND_API_URL")!;
assertExists(
  BACKEND_API_URL,
  "BACKEND_API_URL env must be set",
);

export type TokenOption = {
  tok_str: string;
  prob: number;
};

export async function llamaCppNextToken(
  prompt: string,
): Promise<TokenOption[]> {
  const response = await fetch(BACKEND_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt, n_predict: 1, n_probs: 4 }),
  });

  const { completion_probabilities } = await response.json();

  return completion_probabilities[0].probs;
}
