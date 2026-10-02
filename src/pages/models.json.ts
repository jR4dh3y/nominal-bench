import { MODELS_BY_NUMBER } from "../data/models";

export function GET() {
  return new Response(JSON.stringify(MODELS_BY_NUMBER, null, 2), {
    headers: { "Content-Type": "application/json" },
  });
}
