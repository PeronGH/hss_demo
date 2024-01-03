import "std/dotenv/load.ts";
import { app } from "./src/app.tsx";
import { maybeParseInt } from "./src/utils.ts";

Deno.serve({ port: maybeParseInt(Deno.env.get("PORT")) }, app.fetch);
