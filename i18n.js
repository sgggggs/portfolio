/** @type {import('i18n').Options} */
module.exports = {
	locales: ['en', 'ja'],
	defaultLocale: 'en',
	pages: {
		'*': ['common'],
	},
	loadLocaleFrom: (lang, ns) => {
		return import(`./src/locales/${lang}/${ns}.json`).then((m) => m.default);
	},
};
