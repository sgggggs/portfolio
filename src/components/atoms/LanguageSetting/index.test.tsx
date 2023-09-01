import { composeStories } from '@storybook/react';
import { render, within } from '@testing-library/react';
import { useRouter } from 'next/router';
import * as stories from './index.stories';
import type { ReactElement } from 'react';

const { Default } = composeStories(stories);

const setup = (element: ReactElement) => {
	const { container, getByRole } = render(element);
	const openButton = getByRole('button', { name: 'common:languageSettingOpen' });

	expect(container).toBeAtoms();
	expect(container).toBeInTheDocument();

	return { openButton };
};

describe('LanguageSetting', () => {
	beforeEach(() => {
		(useRouter as jest.Mock).mockReturnValue({
			locale: 'en',
			isReady: true,
		});
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	test('Default', () => {
		const { openButton } = setup(<Default />);
		expect(within(openButton).getByText('common:english')).toBeInTheDocument();
	});

	test('should be the text "japanese" for the open button', () => {
		(useRouter as jest.Mock).mockReturnValue({
			locale: 'ja',
			isReady: true,
		});

		const { openButton } = setup(<Default />);
		expect(within(openButton).getByText('common:japanese')).toBeInTheDocument();
	});
});
