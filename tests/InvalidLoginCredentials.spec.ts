import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('ParaBank login', () => {
  test('shows an error for invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('invalid-user', 'invalid-password');
    await loginPage.expectInvalidCredentialsError();
  });
});
