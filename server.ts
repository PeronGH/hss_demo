import "std/dotenv/load.ts";
import { app } from "./src/app.tsx";

Deno.serve(app.fetch);
