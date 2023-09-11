import { test, expect } from '@playwright/test';
import { url } from './utils';

const LOCALE_LIST = [
	{
		locale: '', // default
		language: 'English',
		menuButtonLabel: 'Open menu',
		languageSettingButtonLabel: 'Open language setting',
	},
	{
		locale: 'en',
		language: 'English',
		menuButtonLabel: 'Open menu',
		languageSettingButtonLabel: 'Open language setting',
	},
	{
		locale: 'ja',
		language: 'Japanese',
		menuButtonLabel: 'メニューを開く',
		languageSettingButtonLabel: '言語設定を開く',
	},
];

test.describe('i18n', () => {
	const path = '/';

	LOCALE_LIST.forEach(({ locale, language, menuButtonLabel, languageSettingButtonLabel }) => {
		test(`should be displayed in ${language} when the locale is ${locale}`, async ({ page }) => {
			await page.goto(url(`${path}/${locale}`));
			expect(page.getByRole('button', { name: menuButtonLabel })).not.toBeNull();
			expect(page.getByRole('button', { name: languageSettingButtonLabel })).not.toBeNull();
		});
	});
});
