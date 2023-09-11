import { useSpring, animated } from '@react-spring/web';
import NextImage from 'next/image';
import { useEffect, useMemo, useRef } from 'react';
import { useGesture } from 'react-use-gesture';
import { GithubIcon } from '@/components/icons';
import { LinkedinIcon } from '@/components/icons';
import { SnsList, type SnsItem } from '@/components/molecules/SnsList';
import type { FC } from 'react';
import * as styles from './styles.css';

const CARD_INITIAL_POSITION = {
	rotateX: 0,
	rotateY: 0,
	rotateZ: 0,
	x: 0,
	y: 0,
};
const CARD_TRANSFORM_PERSPECTIVE = 'perspective(600px)';
const calcX = (y: number) => -(y - window.innerHeight / 2) / 80;
const calcY = (x: number) => (x - window.innerHeight / 2) / 80;

type Props = Readonly<{
	displayName: string | undefined;
	profession: string | undefined;
	githubUrl: string | undefined;
	linkedInUrl: string | undefined;
	profileImageUrl: string | undefined;
}>;

export const ProfileCard: FC<Props> = ({
	displayName,
	profession,
	githubUrl,
	linkedInUrl,
	profileImageUrl,
}) => {
	const targetRef = useRef(null);

	const [{ x, y, rotateX, rotateY, rotateZ }, api] = useSpring(() => ({
		...CARD_INITIAL_POSITION,
		config: { mass: 5, tension: 200, friction: 40 },
	}));

	useGesture(
		{
			onMove: ({ xy: [px, py] }) =>
				api({
					rotateX: calcX(py),
					rotateY: calcY(px),
				}),
			onHover: ({ hovering }) => !hovering && api({ ...CARD_INITIAL_POSITION }),
		},
		{ domTarget: targetRef, eventOptions: { passive: false } },
	);

	useEffect(() => {
		const preventDefault = (e: Event) => e.preventDefault();
		document.addEventListener('gesturestart', preventDefault);
		document.addEventListener('gesturechange', preventDefault);

		return () => {
			document.removeEventListener('gesturestart', preventDefault);
			document.removeEventListener('gesturechange', preventDefault);
		};
	}, []);

	const snsItems: SnsItem[] = useMemo(() => {
		const snsItemsQueue: SnsItem[] = [];

		if (githubUrl) {
			snsItemsQueue.push({ label: 'Github', icon: <GithubIcon size={34} />, href: githubUrl });
		}

		if (linkedInUrl) {
			snsItemsQueue.push({
				label: 'LinkedIn',
				icon: <LinkedinIcon size={30} />,
				href: linkedInUrl,
			});
		}

		return snsItemsQueue;
	}, [githubUrl, linkedInUrl]);

	return (
		<div className={styles.container}>
			<animated.div
				ref={targetRef}
				className={styles.card}
				style={{
					transform: CARD_TRANSFORM_PERSPECTIVE,
					x,
					y,
					rotateX,
					rotateY,
					rotateZ,
				}}
			>
				<div>
					<h1 className={styles.displayName}>{displayName}</h1>
					<p className={styles.profession}>{profession}</p>
					{profileImageUrl && (
						<NextImage
							src={profileImageUrl}
							width={44}
							height={44}
							alt=""
							className={styles.profileImage}
							priority
						/>
					)}
				</div>

				<div className={styles.snsList}>
					<SnsList items={snsItems} />
				</div>
			</animated.div>
		</div>
	);
};
