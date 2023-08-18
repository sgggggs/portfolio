import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';

const config: StorybookConfig = {
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-onboarding',
		'@storybook/addon-interactions',
		'@storybook/addon-a11y',
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
		return config;
	},
};
export default config;
