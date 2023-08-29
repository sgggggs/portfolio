import React from 'react';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from '@/components/functional/Theme';
import { reportAccessibility } from '@/lib/axe/reportAccessibility';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import 'modern-normalize';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<RecoilRoot>
			<ThemeProvider>
				<Component {...pageProps} />
			</ThemeProvider>
		</RecoilRoot>
	);
}

void reportAccessibility(React);
