import { render } from '@testing-library/react';
import { ThemeProvider } from './';

describe('Theme', () => {
	test('Default', () => {
		const { container } = render(<ThemeProvider>{'children'}</ThemeProvider>);
		expect(container).toBeInTheDocument();
	});
});
