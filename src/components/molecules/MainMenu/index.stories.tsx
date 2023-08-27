import { Meta, StoryObj } from '@storybook/react';
import {
	createMainMenuItemsMock,
	MAIN_MENU_ITEMS_NUMEROUS_ITEMS_NUM,
} from '@/tests/mocks/createMainMenuMock';
import { MainMenu } from './';

export default {
	component: MainMenu,
	args: { items: createMainMenuItemsMock(5), isOpen: false },
} as Meta<typeof MainMenu>;

type Story = StoryObj<typeof MainMenu>;

export const Default: Story = {};

export const NumerousItems: Story = {
	args: {
		items: createMainMenuItemsMock(MAIN_MENU_ITEMS_NUMEROUS_ITEMS_NUM),
	},
};

export const Empty: Story = {
	args: { items: [] },
};

export const Open: Story = {
	args: { isOpen: true },
};
