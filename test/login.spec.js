// TEST 1 : Login and upload a new profile picture.
// 1. Go to account page as logged out
// 2. Fill email and password
// 3. Click on connect
// 4. Upload a new profile picture
// 5. Save

const { test, expect } = require('@playwright/test');

const URL_ACCOUNT = 'http://www.welcometothejungle.com/fr/me/settings/account'
const EMAIL = 'inqom.qaautomationapplicant@gmail.com'
const PASSWORD = 'o5N,d5ZR@R7^'
const PATH_PP = 'artefacts/pizza.jpg'

test('login and upload profile picture', async ({ page }) => {
    //// Go to account page as logged out
    await page.goto(URL_ACCOUNT);
    // Wait for connection form
    const form = page.getByTestId('modal-content-home');
    await expect(form).toBeVisible();

    //// Fill email and password
    // Clear and fill email field
    const email = page.getByTestId('login-field-email');
    await email.clear();
    await email.fill(EMAIL);
    // Clear and fill password field
    const password = page.getByTestId('login-field-password');
    await password.clear();
    await password.fill(PASSWORD);

    //// Click on connect
    const connect = page.getByTestId('login-button-submit');
    await connect.click();
    // Wait for account as logged in page (By checking that the links menu is visible)
    const name = page.getByTestId('user-menu-links');
    await expect(name).toBeVisible();

    //// Upload picture
    await page.setInputFiles('input[type="file"]', PATH_PP)

    //// Save
    const save = page.getByTestId('account-edit-button-submit');
    await save.click();
    // Wait for success popup
    await expect(page.getByAltText('Success')).toBeVisible();

    //// Assert : Visual comparison
    // Reload and wait for profile picture form
    await page.goto(URL_ACCOUNT);
    await expect(page.getByTestId('account-edit-field-avatar')).toBeVisible();
    // Compare screenshot with previously saved one
    await expect(page).toHaveScreenshot();
});
