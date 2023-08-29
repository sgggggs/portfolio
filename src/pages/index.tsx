import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import { API_KEY_ABOUT, API_KEY_EXPERIENCE } from '@/api/constants';
import { API_QUERY_FIELDS_ABOUT, API_QUERY_FIELDS_EXPERIENCE } from '@/api/constants';
import { client } from '@/api/utils';
import { ContentWrapper } from '@/components/atoms/ContentWrapper';
import { ProfileCard } from '@/components/molecules/ProfileCard';
import { AboutSection } from '@/components/organisms/AboutSection';
import { ContactSection } from '@/components/organisms/ContactSection';
import { ExperienceSection } from '@/components/organisms/ExperienceSection';
import { BasicLayout } from '@/components/templates/BasicLayout';
import { useGetAbout } from '@/hooks/useGetAbout';
import { useGetExperiences } from '@/hooks/useGetExperiences';
import { BASE_HEAD_TITLE } from '@/utils/constants';
import type { MicroCMSAbout, MicroCMSListExperience } from '@/api/types';
import type { GetStaticProps, NextPage } from 'next';

type Props = {
	data: { [API_KEY_ABOUT]: MicroCMSAbout; [API_KEY_EXPERIENCE]: MicroCMSListExperience };
};

const Home: NextPage<Props> = ({ data }) => {
	const { t } = useTranslation();
	const { data: about } = useGetAbout(data[API_KEY_ABOUT]);
	const { data: experiences } = useGetExperiences(data[API_KEY_EXPERIENCE]);

	return (
		<>
			<Head>
				<title>{BASE_HEAD_TITLE}</title>
				<meta name="description" content={about?.biography} />
			</Head>

			<BasicLayout>
				<ContentWrapper columnType="hybrid">
					<ProfileCard
						displayName={about?.displayName}
						profession={about?.profession}
						githubUrl={about?.githubUrl}
						linkedInUrl={about?.linkedInUrl}
						profileImageUrl={about?.profileImageUrl}
					/>

					<div>
						<AboutSection
							sectionId="about"
							sectionTitle={t('common:about')}
							description={about?.description}
						/>
						<ExperienceSection
							sectionId="experience"
							sectionTitle={t('common:experience')}
							items={experiences}
						/>
						<ContactSection
							sectionId="contact"
							sectionTitle={t('common:contact')}
							email={about?.email}
						/>
					</div>
				</ContentWrapper>
			</BasicLayout>
		</>
	);
};

export const getStaticProps: GetStaticProps<Props> = async () => {
	const about = await client.v1.about.$get({
		query: {
			fields: API_QUERY_FIELDS_ABOUT,
		},
	});

	const experiences = await client.v1.experiences.$get({
		query: {
			fields: API_QUERY_FIELDS_EXPERIENCE,
		},
	});

	return {
		props: {
			data: {
				[API_KEY_ABOUT]: about,
				[API_KEY_EXPERIENCE]: experiences,
			},
		},
	};
};

export default Home;
