import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  workers: 2,
  reporter: "list",
  use: { baseURL: "http://localhost:3000", channel: "chrome", headless: true, reducedMotion: "reduce", screenshot: "only-on-failure" },
  webServer: { command: "node scripts/preview.mjs", url: "http://localhost:3000", reuseExistingServer: !process.env.CI, timeout: 30000 },
});
