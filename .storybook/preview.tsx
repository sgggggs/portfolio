import type { Preview } from '@storybook/react';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from '../src/components/functional/Theme';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import React from 'react';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		nextRouter: {
			locale: 'en',
			Provider: RouterContext.Provider,
		},
	},
	decorators: [
		(Story) => (
			<RecoilRoot>
				<ThemeProvider>
					<Story />
				</ThemeProvider>
			</RecoilRoot>
		),
	],
};

export default preview;
