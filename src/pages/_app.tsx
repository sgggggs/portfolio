import React from 'react';
import { RecoilRoot } from 'recoil';
import { reportAccessibility } from '@/lib/axe/reportAccessibility';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<RecoilRoot>
			<Component {...pageProps} />
		</RecoilRoot>
	);
}

void reportAccessibility(React);
