import { THEME } from './constants';
import { LOCALES } from './constants';

export type Theme = (typeof THEME)[number];

export type Locale = (typeof LOCALES)[number];

export type Locales = Record<(typeof LOCALES)[number], string>;
