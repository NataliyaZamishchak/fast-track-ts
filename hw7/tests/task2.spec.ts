import { test, expect } from '@playwright/test';

test('Verify Playwright homepage', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    const url = page.url();
    expect(url.startsWith('https://playwright.dev')).toBe(true);

    const getStartedLink = page.locator('//a[text()="Get started"]');
    await expect(getStartedLink).toHaveCount(1);
});
