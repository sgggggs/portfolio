import type { MicroCMSListExperience } from '../../types';
import type { DefineMethods } from 'aspida';
import type { MicroCMSQueries } from 'microcms-js-sdk';

export type Methods = DefineMethods<{
	get: {
		query?: MicroCMSQueries;
		resBody: MicroCMSListExperience;
	};
}>;
