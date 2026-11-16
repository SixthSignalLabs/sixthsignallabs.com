import { readdirSync } from "node:fs";
import { join } from "node:path";
import exclusions from "./seo-exclusions.json";

// App Router private folders never map to URLs. Route groups omit their names.
export function publicRoutes(directory = join(process.cwd(), "app"), parts: string[] = []): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    if (entry.isDirectory() && !entry.name.startsWith("_") && !entry.name.startsWith(".")) {
      if (entry.name.includes("[")) throw new Error("Register dynamic SEO routes explicitly before publishing");
      return publicRoutes(join(directory, entry.name), entry.name.startsWith("(") ? parts : [...parts, entry.name]);
    }
    if (!/^page\.(tsx|ts|jsx|js)$/.test(entry.name)) return [];
    const route = `/${parts.join("/")}`;
    return route in exclusions ? [] : [route];
  });
}
