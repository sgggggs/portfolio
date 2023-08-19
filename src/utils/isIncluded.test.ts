import { isIncluded } from './isIncluded';

const MOCK_TARGET_VALUE = 'target';

const MOCK_INCLUDED_TARGET_VALUE = [MOCK_TARGET_VALUE, 'foo'];
const MOCK_EXCLUDED_TARGET_VALUE = ['foo', 'bar'];

describe('isIncluded', () => {
	test.each([
		[MOCK_INCLUDED_TARGET_VALUE, MOCK_TARGET_VALUE, true],
		[MOCK_EXCLUDED_TARGET_VALUE, MOCK_TARGET_VALUE, false],
	])('Should return true if the target value is included', (a, b, expected) => {
		expect(isIncluded(a, b)).toBe(expected);
	});
});
