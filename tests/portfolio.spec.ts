import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("every case study has its own content and metadata", async ({ page }) => {
  for (const [slug, title] of [["4dalert", "4DAlert"], ["ask4d", "Ask4D"], ["homepilot", "HomePilot"], ["portfolio", "The portfolio"]]) {
    const response = await page.goto(`/projects/${slug}/`);
    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toContainText(title);
    await expect(page).toHaveTitle(new RegExp(`${title} — Case study`));
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", new RegExp(`/projects/${slug}/$`));
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute("content", `${title} — Engineering case study`);
    await expect(page.locator('meta[name="twitter:title"]')).toHaveAttribute("content", `${title} — Engineering case study`);
  }
});

test("homepage and case studies fit all requested viewport widths", async ({ page }) => {
  for (const width of [1440, 1280, 1024, 768, 480, 390, 360]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of ["/", "/projects/4dalert/", "/projects/ask4d/", "/projects/homepilot/", "/projects/portfolio/"]) {
      await page.goto(route);
      const dimensions = await page.evaluate(() => ({ content: document.documentElement.scrollWidth, viewport: window.innerWidth }));
      expect(dimensions.content, `${route} overflow at ${width}px`).toBeLessThanOrEqual(dimensions.viewport);
    }
  }
});

test("mobile navigation opens, follows links, and closes with Escape", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Open navigation" });
  await toggle.click();
  await expect(page.getByRole("navigation", { name: "Mobile navigation" })).toBeVisible();
  await page.getByRole("navigation", { name: "Mobile navigation" }).getByRole("link", { name: "Projects" }).click();
  await expect(page).toHaveURL(/#projects$/);
  await expect(page.getByRole("navigation", { name: "Mobile navigation" })).toHaveCount(0);
  await toggle.click();
  await page.keyboard.press("Escape");
  await expect(toggle).toBeFocused();
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
});

test("theme persists across page navigation and reload", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Switch to light theme" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.goto("/projects/ask4d/");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.reload();
  await expect(page.getByRole("button", { name: "Switch to dark theme" })).toBeVisible();
  await page.getByRole("button", { name: "Switch to dark theme" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
});

test("unconfigured form never claims to send and missing resume is graceful", async ({ page }) => {
  await page.goto("/");
  await page.getByLabel("Your name").fill("Test visitor");
  await page.getByLabel("Email address").fill("visitor@example.com");
  await page.getByLabel("What’s on your mind?").fill("I would like to discuss an engineering opportunity.");
  await page.getByRole("button", { name: "Send message" }).click();
  await expect(page.getByText("Your message has not been sent.", { exact: false })).toBeVisible();
  await page.getByRole("button", { name: "Resume", exact: true }).first().click();
  await expect(page.getByRole("status")).toContainText("My resume will be available");
  await page.getByRole("button", { name: "Dismiss notification" }).click();
  await expect(page.getByRole("status")).toHaveCount(0);
});

test("main pages pass automated accessibility checks in both themes", async ({ page }) => {
  for (const route of ["/", "/projects/4dalert/", "/projects/ask4d/"]) {
    await page.goto(route);
    for (const theme of ["dark", "light"]) {
      const currentTheme = await page.locator("html").getAttribute("data-theme");
      if (currentTheme !== theme) {
        await page.getByRole("button", { name: `Switch to ${theme} theme` }).click();
      }
      // Let CSS transitions and inherited colors settle before measuring contrast.
      await page.evaluate(() => new Promise<void>(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve()))));
      const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
      expect(results.violations, `${route} in ${theme}: ${JSON.stringify(results.violations.map(v => ({ id: v.id, nodes: v.nodes.map(n => n.target) })))}`).toEqual([]);
    }
  }
});

test("keyboard skip link, reduced motion, console, and 404 behavior", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", error => errors.push(error.message));
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Skip to content" })).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#main-content$/);
  expect(await page.locator("html").evaluate(el => getComputedStyle(el).scrollBehavior)).toBe("auto");
  await page.goto("/projects/4dalert/");
  expect(errors).toEqual([]);
  const response = await page.goto("/nonexistent-page/");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("This route leads");
});
