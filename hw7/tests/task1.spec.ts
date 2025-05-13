import { test, expect } from '@playwright/test';

test('Verify Example website', async ({ page }) => {
    await page.goto('https://example.com/');

    const title = await page.title();
    expect(title).toBe('Example Domain');

    const url = page.url();
    expect(url).toContain('example.com');

    const bodyText = await page.textContent('body');
    expect(bodyText).toMatch(/This domain is for use in illustrative examples/);

    await expect(page.locator('h1')).toHaveText('Example Domain');
});
