import { I18nSchema } from '@/api/types';
import { LOCALES } from '@/utils/constants';

export const createI18nSchemaMock = (value: string): I18nSchema =>
	LOCALES.reduce((acc, locale) => {
		acc[locale] = value;
		return acc;
	}, {} as I18nSchema);
