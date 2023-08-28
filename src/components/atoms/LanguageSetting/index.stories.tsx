import { Meta, StoryObj } from '@storybook/react';
import { LanguageSettingProvider } from '.';

export default {
	component: LanguageSettingProvider,
	args: { isEnableCloseButton: false },
} as Meta<typeof LanguageSettingProvider>;

type Story = StoryObj<typeof LanguageSettingProvider>;

export const Default: Story = {};

export const EnableCloseButton: Story = {
	args: { isEnableCloseButton: true },
};
