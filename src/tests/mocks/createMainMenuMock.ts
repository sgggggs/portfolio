import type { MainMenuItems } from '@/components/molecules/MainMenu';

export const MAIN_MENU_ITEMS_NUMEROUS_ITEMS_NUM = 10;

export const createMainMenuItemsMock = (itemNum: number): MainMenuItems => {
	return Array.from({ length: itemNum }, (_, i) => {
		return {
			id: `id${i}`,
			title: `title${i}`,
			href: `href${i}`,
		};
	});
};
