import { atom } from 'recoil';
import { RecoilAtomKeys } from '../keys';
import type { Theme } from '@/utils/types';

export const themeState = atom<Theme>({
	key: RecoilAtomKeys.THEME_STATE,
	default: 'light',
});
