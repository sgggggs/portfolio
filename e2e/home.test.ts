import { test, expect } from '@playwright/test';
import { url } from './utils';

test.describe('home page', () => {
	const path = '/';

	test.beforeEach(async ({ page }) => {
		await page.goto(url(path));
	});

	test('should be open an appropriate external link in a new window/tab', async ({ page }) => {
		const githubLinkElement = page.getByLabel('Github');
		const hasGithubLinkElement = (await githubLinkElement.count()) > 0;
		if (hasGithubLinkElement) {
			const newPagePromise = page.waitForEvent('popup');
			await githubLinkElement.click();
			const githubOverviewPage = await newPagePromise;
			await expect(githubOverviewPage).toHaveURL(/^https:\/\/github\.com\/[a-zA-Z0-9_-]+\/?$/);
		}

		const linkedInLinkElement = page.getByLabel('LinkedIn');
		const hasLinkedInLinkElement = (await linkedInLinkElement.count()) > 0;
		if (hasLinkedInLinkElement) {
			const newPagePromise = page.waitForEvent('popup');
			await linkedInLinkElement.click();
			const linkedInProfilePage = await newPagePromise;
			await expect(linkedInProfilePage).toHaveURL(
				/^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9-]+\/?$/,
			);
		}
	});

	test('should be url has the appropriate locale, and the top of the page is displayed', async ({
		page,
	}) => {
		await page.getByLabel('Open language setting').click();
		await page.getByRole('button', { name: 'Japanese' }).click();
		await page.waitForURL(`${url(path)}ja`);
		const scrollPosition = await page.evaluate(() => {
			return {
				y: window.scrollY,
			};
		});
		expect(scrollPosition.y).toBe(0);
	});
});
