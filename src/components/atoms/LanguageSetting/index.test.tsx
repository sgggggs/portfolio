import { composeStories } from '@storybook/react';
import { render, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useRouter } from 'next/router';
import * as stories from './index.stories';
import type { ReactElement } from 'react';

jest.mock('./Container', () => ({
	__esModule: true,
	...jest.requireActual<typeof import('./Container')>('./Container'),
	handleIsEnableCloseButton: () => jest.fn(),
}));

const user = userEvent.setup();

const { Default, EnableCloseButton } = composeStories(stories);

const setup = (element: ReactElement) => {
	const { container, getByRole } = render(element);
	expect(container).toBeAtoms();
	expect(container).toBeInTheDocument();
	return { getByRole };
};

describe('LanguageSetting', () => {
	beforeAll(() => {
		(useRouter as jest.Mock).mockReturnValue({
			locale: 'en',
			isReady: true,
		});
	});

	test('Default', () => {
		const { getByRole } = setup(<Default />);
		const openButton = getByRole('button', { name: 'common:languageSettingOpen' });
		expect(within(openButton).getByText('common:english')).toBeInTheDocument();
	});

	test('EnableCloseButton', async () => {
		const { getByRole } = setup(<EnableCloseButton />);
		const openButton = getByRole('button', { name: 'common:languageSettingOpen' });
		await user.click(openButton);

		const closeButton = getByRole('button', { name: 'common:languageSettingClose' });
		expect(closeButton).toBeInTheDocument();
	});

	test('should be the text "japanese" for the open button', () => {
		(useRouter as jest.Mock).mockReturnValue({
			locale: 'ja',
			isReady: true,
		});

		const { getByRole } = setup(<Default />);
		const openButton = getByRole('button', { name: 'common:languageSettingOpen' });
		expect(within(openButton).getByText('common:japanese')).toBeInTheDocument();
	});

	afterAll(() => {
		jest.clearAllMocks();
	});
});
