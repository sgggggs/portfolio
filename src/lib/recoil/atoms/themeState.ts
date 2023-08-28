import { atom } from 'recoil';
import { RECOIL_ATOM_KEYS } from '../keys';
import type { Theme } from '@/utils/types';

export const themeState = atom<Theme>({
	key: RECOIL_ATOM_KEYS.THEME_STATE,
	default: 'dark',
});
