import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import { CustomError } from '@/components/molecules/CustomError';
import { BASE_HEAD_TITLE } from '@/utils/constants';

export default function Custom404(): JSX.Element {
	const { t } = useTranslation();

	return (
		<>
			<Head>
				<title>{`404 Not Found - ${BASE_HEAD_TITLE}`}</title>
			</Head>
			<CustomError title={'404'} description={t('common:pageNotFound')} />
		</>
	);
}
