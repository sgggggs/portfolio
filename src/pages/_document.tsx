import { Html, Head, Main, NextScript } from 'next/document';

export default function Document(): JSX.Element {
	return (
		<Html lang="en">
			<Head>
				<link rel="icon" type="image/svg+xml" href="/favicons/favicon.svg" />
				<link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
				<link rel="manifest" href="/favicons/site.webmanifest" />
				<link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#274a78" />
				<meta name="color-scheme" content="light dark" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="robots" content="noindex" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
