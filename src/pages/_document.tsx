import { Html, Head, Main, NextScript } from 'next/document';

export default function Document(): JSX.Element {
	return (
		<Html lang="en">
			<Head>
				<meta name="color-scheme" content="light dark" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
