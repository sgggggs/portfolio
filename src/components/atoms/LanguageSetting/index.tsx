import * as Popover from '@radix-ui/react-popover';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { useMemo, type FC } from 'react';
import { GlobeIcon } from '@/components/icons';
import { BaseButton } from '../BaseButton';
import { BaseLink } from '../BaseLink';
import * as styles from './styles.css';

export const LanguageSetting: FC = () => {
	const { t } = useTranslation();
	const { locale } = useRouter();

	const languageItems = useMemo(
		() => [
			{ label: t('common:english'), locale: 'en' },
			{ label: t('common:japanese'), locale: 'ja' },
		],
		[t],
	);

	const filteredLanguageItems = useMemo(
		() => languageItems.filter((v) => v.locale !== locale),
		[locale, languageItems],
	);

	const selectedLanguageItemLabel = useMemo(
		() => languageItems.filter((v) => v.locale === locale),
		[locale, languageItems],
	)[0].label;

	return (
		<Popover.Root>
			<Popover.Trigger asChild>
				<BaseButton type="button" aria-label={t('common:languageSettingOpen')}>
					<div className={styles.trigger}>
						<GlobeIcon size={20} />
						<span>{selectedLanguageItemLabel}</span>
					</div>
				</BaseButton>
			</Popover.Trigger>

			<Popover.Content sideOffset={16} className={styles.content}>
				<ul className={styles.list}>
					{filteredLanguageItems.map(({ label, locale }, i) => (
						<li key={`${label}${i}`} className={styles.item}>
							<Popover.Close asChild type={undefined}>
								<BaseLink href="/" locale={locale}>
									<span className={styles.linkInner}>{label}</span>
								</BaseLink>
							</Popover.Close>
						</li>
					))}
				</ul>
			</Popover.Content>
		</Popover.Root>
	);
};
