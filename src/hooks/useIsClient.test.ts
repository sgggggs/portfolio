import { renderHook as renderHookCsr } from '@testing-library/react-hooks/dom';
import { renderHook as renderHookSsr } from '@testing-library/react-hooks/server';
import { useIsClient } from './useIsClient';

describe('useIsClient', () => {
	test('should be false when rendering on the server', () => {
		const { result } = renderHookSsr(() => useIsClient());
		expect(result.current).toBe(false);
	});

	test('should be true when after hydration', () => {
		const { result, hydrate } = renderHookSsr(() => useIsClient());
		hydrate();
		expect(result.current).toBe(true);
	});

	test('should be true when rendering on the client', () => {
		const { result } = renderHookCsr(() => useIsClient());
		expect(result.current).toBe(true);
	});
});
