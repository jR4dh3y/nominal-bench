export const PROVIDERS = [
  "openai",
  "anthropic",
  "xai",
  "google",
  "zai",
  "deepseek",
  "moonshot",
  "qwen",
  "meta",
  "xiaomi",
] as const;

export type Provider = (typeof PROVIDERS)[number];

export interface LlmModel {
  id: string;
  name: string;
  provider: Provider;
  /** Calendar release date, sourced from Artificial Analysis. */
  releaseDate: string;
  /** Marketing model number, e.g. "GPT-6.1 Sol" -> 6.1. */
  modelNumber: number;
}

export const PROVIDER_META: Record<
  Provider,
  { label: string; color: string; icon: string }
> = {
  openai: { label: "OpenAI", color: "#0e9f6e", icon: "/icons/openai.svg" },
  anthropic: { label: "Anthropic", color: "#d97757", icon: "/icons/anthropic.svg" },
  xai: { label: "xAI", color: "#111111", icon: "/icons/x.svg" },
  google: { label: "Google", color: "#4285f4", icon: "/icons/google.svg" },
  zai: { label: "Z.AI", color: "#7c3aed", icon: "/icons/zai.svg" },
  deepseek: { label: "DeepSeek", color: "#0e9384", icon: "/icons/deepseek.svg" },
  moonshot: { label: "Moonshot", color: "#0f172a", icon: "/icons/kimi.svg" },
  qwen: { label: "Qwen", color: "#ea580c", icon: "/icons/alibabacloud.svg" },
  meta: { label: "Meta", color: "#3e63dd", icon: "/icons/meta.svg" },
  xiaomi: { label: "Xiaomi", color: "#e53935", icon: "/icons/xiaomi.svg" },
};

/** LLMs only. Dates and names match Artificial Analysis listings. */
export const MODELS: LlmModel[] = [
  { id: "kimi-k2-5", name: "Kimi K2.5", provider: "moonshot", releaseDate: "2026-01-27", modelNumber: 2.5 },
  { id: "qwen-3-5-plus", name: "Qwen 3.5 Plus", provider: "qwen", releaseDate: "2026-02-16", modelNumber: 3.5 },
  { id: "mimo-v2-pro", name: "MiMo V2 Pro", provider: "xiaomi", releaseDate: "2026-03-18", modelNumber: 2.0 },
  { id: "qwen-3-6-plus", name: "Qwen 3.6 Plus", provider: "qwen", releaseDate: "2026-04-02", modelNumber: 3.6 },
  { id: "glm-5-1", name: "GLM-5.1", provider: "zai", releaseDate: "2026-04-07", modelNumber: 5.1 },
  { id: "kimi-k2-6", name: "Kimi K2.6", provider: "moonshot", releaseDate: "2026-04-20", modelNumber: 2.6 },
  { id: "mimo-v2-5-pro", name: "MiMo V2.5 Pro", provider: "xiaomi", releaseDate: "2026-04-23", modelNumber: 2.5 },
  { id: "qwen-3-7-plus", name: "Qwen 3.7 Plus", provider: "qwen", releaseDate: "2026-06-01", modelNumber: 3.7 },
  { id: "fable-5", name: "Fable 5", provider: "anthropic", releaseDate: "2026-06-09", modelNumber: 5.0 },
  { id: "glm-5-2", name: "GLM-5.2", provider: "zai", releaseDate: "2026-06-16", modelNumber: 5.2 },
  { id: "grok-4-5", name: "Grok 4.5", provider: "xai", releaseDate: "2026-07-08", modelNumber: 4.5 },
  { id: "gpt-5-6-sol", name: "GPT-5.6 Sol", provider: "openai", releaseDate: "2026-07-09", modelNumber: 5.6 },
  { id: "muse-spark-1-1", name: "Muse Spark 1.1", provider: "meta", releaseDate: "2026-07-09", modelNumber: 1.1 },
  { id: "kimi-k3", name: "Kimi K3", provider: "moonshot", releaseDate: "2026-07-16", modelNumber: 3.0 },
  { id: "gemini-3-6-flash", name: "Gemini 3.6 Flash", provider: "google", releaseDate: "2026-07-21", modelNumber: 3.6 },
  { id: "deepseek-v4-flash", name: "DeepSeek V4 Flash", provider: "deepseek", releaseDate: "2026-07-31", modelNumber: 4.0 },
  { id: "qwen-3-8-max", name: "Qwen 3.8 Max", provider: "qwen", releaseDate: "2026-08-02", modelNumber: 3.8 },
  { id: "muse-spark-1-2", name: "Muse Spark 1.2", provider: "meta", releaseDate: "2026-08-05", modelNumber: 1.2 },
  { id: "grok-4-6", name: "Grok 4.6", provider: "xai", releaseDate: "2026-08-12", modelNumber: 4.6 },
  { id: "gemini-3-7-flash", name: "Gemini 3.7 Flash", provider: "google", releaseDate: "2026-08-13", modelNumber: 3.7 },
  { id: "deepseek-v4-pro", name: "DeepSeek V4 Pro", provider: "deepseek", releaseDate: "2026-08-13", modelNumber: 4.0 },
  { id: "glm-5-3", name: "GLM-5.3", provider: "zai", releaseDate: "2026-08-14", modelNumber: 5.3 },
  { id: "fable-5-1", name: "Fable 5.1", provider: "anthropic", releaseDate: "2026-09-01", modelNumber: 5.1 },
  { id: "gemini-3-8-flash", name: "Gemini 3.8 Flash", provider: "google", releaseDate: "2026-09-02", modelNumber: 3.8 },
  { id: "gpt-6-astra", name: "GPT-6 Astra", provider: "openai", releaseDate: "2026-09-03", modelNumber: 6.0 },
  { id: "muse-spark-1-3", name: "Muse Spark 1.3", provider: "meta", releaseDate: "2026-09-05", modelNumber: 1.3 },
  { id: "deepseek-v4-1-flash", name: "DeepSeek V4.1 Flash", provider: "deepseek", releaseDate: "2026-09-10", modelNumber: 4.1 },
  { id: "grok-4-7", name: "Grok 4.7", provider: "xai", releaseDate: "2026-09-21", modelNumber: 4.7 },
  { id: "mimo-v2-6-pro", name: "MiMo V2.6 Pro", provider: "xiaomi", releaseDate: "2026-09-21", modelNumber: 2.6 },
  { id: "opus-5-5", name: "Opus 5.5", provider: "anthropic", releaseDate: "2026-09-22", modelNumber: 5.5 },
  { id: "gpt-6-1-sol", name: "GPT-6.1 Sol", provider: "openai", releaseDate: "2026-09-29", modelNumber: 6.1 },
];

export const MODELS_BY_DATE: LlmModel[] = [...MODELS].sort((a, b) =>
  a.releaseDate.localeCompare(b.releaseDate),
);

export const MODELS_BY_NUMBER: LlmModel[] = [...MODELS].sort(
  (a, b) => b.modelNumber - a.modelNumber,
);

export function seriesFor(provider: Provider): LlmModel[] {
  return MODELS.filter((m) => m.provider === provider).sort((a, b) =>
    a.releaseDate.localeCompare(b.releaseDate),
  );
}
