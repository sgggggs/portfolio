import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';
import { VanillaExtractPlugin } from '@vanilla-extract/webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const config: StorybookConfig = {
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-onboarding',
		'@storybook/addon-interactions',
		'@storybook/addon-a11y',
		'storybook-addon-next-router',
	],
	core: {
		builder: '@storybook/builder-webpack5',
	},
	docs: {
		autodocs: 'tag',
	},
	framework: {
		name: '@storybook/nextjs',
		options: {},
	},
	stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
	staticDirs: ['../public'],
	webpackFinal: async (config) => {
		config.resolve.alias = {
			...config.resolve.alias,
			'@': path.resolve(__dirname, '../src'),
		};
		// @see https://storybook.js.org/recipes/@vanilla-extract/css#webpack
		config.plugins?.push(new VanillaExtractPlugin(), new MiniCssExtractPlugin());
		config.module?.rules?.forEach((rule) => {
			if (typeof rule !== 'string' && rule.test instanceof RegExp && rule.test.test('test.css')) {
				rule.exclude = /\.vanilla\.css$/i;
			}
		});
		config.module?.rules?.push({
			test: /\.vanilla\.css$/i,
			use: [
				MiniCssExtractPlugin.loader,
				{
					loader: require.resolve('css-loader'),
					options: {
						url: false,
					},
				},
			],
		});
		return config;
	},
};
export default config;
