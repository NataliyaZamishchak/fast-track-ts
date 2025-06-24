import { test, expect } from '@playwright/test';

test.describe('Guru99 checkboxes', () => {
    test('All checkboxes with one locator', async ({ page }) => {
        await page.goto('https://demo.guru99.com/test/radio.html');

        const checkboxes = page.locator('[type="checkbox"]');
        const count = await checkboxes.count();

        // Check all checkboxes and verify
        for (let i = 0; i < count; i++) {
            await checkboxes.nth(i).check();
            await expect(checkboxes.nth(i)).toBeChecked();
        }

        // Uncheck all checkboxes and verify
        for (let i = 0; i < count; i++) {
            await checkboxes.nth(i).uncheck();
            await expect(checkboxes.nth(i)).not.toBeChecked();
        }
    });

    test('Each checkbox with its own locator', async ({ page }) => {
        await page.goto('https://demo.guru99.com/test/radio.html');

        const checkbox1 = page.locator('#vfb-6-0');
        const checkbox2 = page.locator('#vfb-6-1');
        const checkbox3 = page.locator('#vfb-6-2');

        //  Enable all checkboxes Checkbox1, Checkbox2, Checkbox3 on the page
        await checkbox1.check();
        await checkbox2.check();
        await checkbox3.check();

        //  Verify that all checkboxes are checked
        await expect(checkbox1).toBeChecked();
        await expect(checkbox2).toBeChecked();
        await expect(checkbox3).toBeChecked();

        //  Deactivate all checkboxes Checkbox1, Checkbox2, Checkbox3 on the page
        await checkbox1.uncheck();
        await checkbox2.uncheck();
        await checkbox3.uncheck();

        //  Verify that all checkboxes are unchecked
        await expect(checkbox1).not.toBeChecked();
        await expect(checkbox2).not.toBeChecked();
        await expect(checkbox3).not.toBeChecked();
    });
});
