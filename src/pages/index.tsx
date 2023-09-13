import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import { API_KEY_ABOUT, API_KEY_EXPERIENCE, API_KEY_SHOWCASE } from '@/api/constants';
import { getAbout } from '@/api/getAbout';
import { getExperiences } from '@/api/getExperiences';
import { getShowcases } from '@/api/getShowcases';
import { ContentWrapper } from '@/components/atoms/ContentWrapper';
import { ProfileCard } from '@/components/molecules/ProfileCard';
import { AboutSection } from '@/components/organisms/AboutSection';
import { ContactSection } from '@/components/organisms/ContactSection';
import { ExperienceSection } from '@/components/organisms/ExperienceSection';
import { ShowcaseSection } from '@/components/organisms/ShowcaseSection';
import { BasicLayout } from '@/components/templates/BasicLayout';
import { BASE_HEAD_TITLE } from '@/utils/constants';
import { LOCALES, DEFAULT_LOCALE } from '@/utils/constants';
import { isIncluded } from '@/utils/isIncluded';
import type { About, Experience, Showcase } from '@/api/types';
import type { GetStaticProps, NextPage } from 'next';

type Props = {
	data: {
		[API_KEY_ABOUT]: About;
		[API_KEY_EXPERIENCE]: Experience[];
		[API_KEY_SHOWCASE]: Showcase[];
	};
};

const Home: NextPage<Props> = ({ data }) => {
	const { t } = useTranslation();
	const {
		[API_KEY_ABOUT]: about,
		[API_KEY_EXPERIENCE]: experiences,
		[API_KEY_SHOWCASE]: showcases,
	} = data;

	return (
		<>
			<Head>
				<title>{BASE_HEAD_TITLE}</title>
				<meta name="description" content={about?.biography} />
			</Head>

			<BasicLayout>
				<ContentWrapper columnType="hybrid">
					<ProfileCard
						displayName={about.displayName}
						profession={about.profession}
						githubUrl={about.githubUrl}
						linkedInUrl={about.linkedInUrl}
						profileImageUrl={about.profileImageUrl}
					/>

					<div>
						<AboutSection
							sectionId="about"
							sectionTitle={t('common:about')}
							description={about.description}
						/>
						<ExperienceSection
							sectionId="experience"
							sectionTitle={t('common:experience')}
							items={experiences}
						/>
						<ShowcaseSection
							sectionId="showcase"
							sectionTitle={t('common:showcase')}
							items={showcases}
						/>
						<ContactSection
							sectionId="contact"
							sectionTitle={t('common:contact')}
							email={about.email}
						/>
					</div>
				</ContentWrapper>
			</BasicLayout>
		</>
	);
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
	const locale = isIncluded(LOCALES, context.locale) ? context.locale : DEFAULT_LOCALE;
	const [about, experiences, showcases] = await Promise.all([
		getAbout(locale),
		getExperiences(locale),
		getShowcases(locale),
	]);

	return {
		props: {
			data: {
				[API_KEY_ABOUT]: about,
				[API_KEY_EXPERIENCE]: experiences,
				[API_KEY_SHOWCASE]: showcases,
			},
		},
	};
};

export default Home;
