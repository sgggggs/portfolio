import * as AllIcons from './index';
import type { Meta } from '@storybook/react';

export const Icons = (): JSX.Element[] =>
	Object.values(AllIcons).map((Icon, index) => (
		<div key={index} style={{ display: 'grid', placeItems: 'center', rowGap: '8px' }}>
			<Icon size={22} />
			<p style={{ fontSize: '12px', margin: 0 }}>{Icon.displayName}</p>
		</div>
	));

export default {
	component: Icons,
	decorators: [
		(Story) => (
			<div
				style={{
					display: 'inline-grid',
					gridTemplateColumns: 'repeat(5, 1fr)',
					gap: '32px',
					padding: '24px 0',
					letterSpacing: '.5px',
				}}
			>
				<Story />
			</div>
		),
	],
} as Meta<typeof Icons>;
