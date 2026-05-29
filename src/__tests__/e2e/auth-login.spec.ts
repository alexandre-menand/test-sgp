import { test, expect } from '@playwright/test';

test('Redirection vers la page de connexion', async ({ page }) => {
    await page.goto('/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveURL('http://localhost:3000/auth/login');
});

test('Connection réussi avec le formulaire', async ({ page }) => {
    await page.goto('/auth/login');

    // Ajoute des valeurs aux champs du formulaire
    await page.fill('#email', 'test@mail.com')
    await page.fill('#password', '1234567890')

    // submit le formulaire
    await page.click('button[type="submit"]')

    // test si le formulaire à bien été envoyé sans erreurs
    await expect(page.getByText('Envoyé')).toBeVisible()
});


test('Connection raté avec le formulaire - email invalide', async ({ page }) => {
    await page.goto('/auth/login');

    // Ajoute des valeurs aux champs du formulaire
    await page.fill('#email', '')
    await page.fill('#password', '1234567890')

    // submit le formulaire
    await page.click('button[type="submit"]')

    // test si le formulaire à bien été envoyé sans erreurs
    await expect(page.getByText('Erreur')).toBeVisible()
});

test('Connection raté avec le formulaire - password invalide', async ({ page }) => {
    await page.goto('/auth/login');

    // Ajoute des valeurs aux champs du formulaire
    await page.fill('#email', 'test@mail.com')
    await page.fill('#password', '1')

    // submit le formulaire
    await page.click('button[type="submit"]')

    // test si le formulaire à bien été envoyé sans erreurs
    await expect(page.getByText('Erreur')).toBeVisible()
});
