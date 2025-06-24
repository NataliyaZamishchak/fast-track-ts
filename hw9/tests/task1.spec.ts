import { test, expect } from '@playwright/test';

test('Verify herokuapp login', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');

    // Enter invalid data in the Username and/or Password fields and click the Login button
    await page.getByLabel('Username').fill('admin');
    await page.getByLabel('Password').fill('invalidpassword');
    await page.locator('button[type="submit"]').click();

    // Verify that you were unable to log in
    expect(page.locator('.flash.error')).toBeVisible();
    await expect(page.locator('.flash.error')).toContainText('Your username is invalid!');
    expect(page.url()).toContain('login');

    // Enter valid data in the Username and Password fields and click the Login button
    await page.getByLabel('Username').fill('tomsmith');
    await page.getByLabel('Password').fill('SuperSecretPassword!');
    await page.locator('button[type="submit"]').click();

    // Verify that you have successfully logged in
    await expect(page.locator('.flash.success')).toBeVisible();
    await expect(page.locator('.flash.success')).toContainText('You logged into a secure area!');
    expect(page.url()).toContain('secure');

    // Log out by clicking the Logout button
    await page.locator('a.button').click();

    // Verify that you have successfully logged out
    await expect(page.locator('.flash.success')).toBeVisible();
    await expect(page.locator('.flash.success')).toContainText(' You logged out of the secure area! ');
    expect(page.url()).toContain('login');
});
