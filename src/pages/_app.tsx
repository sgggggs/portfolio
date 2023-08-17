import React from 'react';
import { reportAccessibility } from '../lib/axe/reportAccessibility';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
	return <Component {...pageProps} />;
}

void reportAccessibility(React);
