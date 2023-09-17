// @ts-check
const { test, expect } = require('@playwright/test');

const resumeURL = 'http://127.0.0.1:5500/Module2.html'; // Replace with the URL of the student's resume page

/* This test checks that the name heading (h1) is visible on the page */
test('Check Name Heading', async ({ page }) => {
  await page.goto(resumeURL);
  await expect(page.locator('h1')).toBeVisible();
});

/* This test checks that the tagline heading (h2) is visible on the page */
test('Check Tagline Heading', async ({ page }) => {
  await page.goto(resumeURL);
  await expect(page.locator('header h2')).toBeVisible();
});

/* This test checks that the email link is visible on the page */
test('Check Email Link', async ({ page }) => {
  await page.goto(resumeURL);
  await expect(page.locator('a[href^="mailto:"]')).toBeVisible();
});

/* This test checks that the phone number link is visible on the page */
test('Check Phone Number Link', async ({ page }) => {
  await page.goto(resumeURL);
  await expect(page.locator('a[href^="tel:"]')).toBeVisible();
});

/* This test checks that the address is visible on the page */
test('Check Address', async ({ page }) => {
  await page.goto(resumeURL);
  await expect(page.locator('p:has-text("123 Main St")')).toBeVisible();
});

/* This test checks that the LinkedIn link is visible on the page */
test('Check LinkedIn Link', async ({ page }) => {
  await page.goto(resumeURL);
  await expect(page.locator('a[href*="linkedin.com"]')).toBeVisible();
});

/* This test checks that the GitHub link is visible on the page */
test('Check GitHub Link', async ({ page }) => {
  await page.goto(resumeURL);
  await expect(page.locator('a[href*="github.com"]')).toBeVisible();
});

/* This test checks that the Objective section is visible on the page */
test('Check Objective Section', async ({ page }) => {
  await page.goto(resumeURL);
  await expect(page.locator('section h2:has-text("Objective")')).toBeVisible();
});

/* This test checks that the Education section is visible on the page */
test('Check Education Section', async ({ page }) => {
  await page.goto(resumeURL);
  await expect(page.locator('section h2:has-text("Education")')).toBeVisible();
});

/* This test checks that the Experience section is visible on the page */
test('Check Experience Section', async ({ page }) => {
  await page.goto(resumeURL);
  await expect(page.locator('section h2:has-text("Experience")')).toBeVisible();
});

/* This test checks that the Skills section is visible on the page */
test('Check Skills Section', async ({ page }) => {
  await page.goto(resumeURL);
  await expect(page.locator('section h2:has-text("Skills")')).toBeVisible();
});

/* This test checks that the page title is not empty */
test('Check Page Title', async ({ page }) => {
  await page.goto(resumeURL);
  const title = await page.title();
  await expect(title).not.toBe('');
});

/* This test checks that the meta description for SEO is not empty */
test('Check SEO Meta Description', async ({ page }) => {
  await page.goto(resumeURL);
  const metaDescription = await page.getAttribute('meta[name="description"]', 'content');
  await expect(metaDescription).not.toBe('');
});

/* This test checks that the meta keywords for SEO are not empty */
test('Check SEO Meta Keywords', async ({ page }) => {
  await page.goto(resumeURL);
  const metaKeywords = await page.getAttribute('meta[name="keywords"]', 'content');
  await expect(metaKeywords).not.toBe('');
});

/* This test checks that the footer is visible on the page */
test('Check Footer', async ({ page }) => {
  await page.goto(resumeURL);
  await expect(page.locator('footer')).toBeVisible();
});
