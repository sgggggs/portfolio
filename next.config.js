const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();
const nextTranslate = require('next-translate-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
};

module.exports = withVanillaExtract(nextTranslate(nextConfig));
