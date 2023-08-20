import { getRoles } from '@testing-library/react';

interface CustomMatchers<R = unknown> {
	toBeAtoms: () => R;
	toBeMolecules: () => R;
	toBeOrganisms: () => R;
	toBeTemplates: () => R;
}

declare global {
	namespace jest {
		interface Expect extends CustomMatchers {}
		interface Matchers<R> extends CustomMatchers<R> {}
		interface InverseAsymmetricMatchers extends CustomMatchers {}
	}
}

const groupRoles = [
	'group',
	'article',
	'list',
	'term',
	'tablist',
	'tabpanel',
	'table',
	'rowgroup',
	'row',
	'combobox',
];

const maybeLandmarkRoles = ['banner', 'contentinfo'];

const landmarkRoles = ['complementary', 'form', 'navigation', 'region', 'search'];

const windowRoles = ['alertdialog', 'dialog'];

const ignoresRoles = ['generic', 'presentation'];

const includeGroupRole = (keys: string[]) => {
	return keys.map((key) => groupRoles.includes(key)).some(Boolean);
};

const includeMaybeLandmarkRole = (keys: string[]) => {
	return keys.map((key) => maybeLandmarkRoles.includes(key)).some(Boolean);
};

const includeLandmarkRole = (keys: string[]) => {
	return keys.map((key) => landmarkRoles.includes(key)).some(Boolean);
};

const includeWindowRole = (keys: string[]) => {
	return keys.map((key) => windowRoles.includes(key)).some(Boolean);
};

const includeMainRole = (keys: string[]) => {
	return keys.includes('main');
};

const getRoleKeys = (container: HTMLElement) => {
	return Object.keys(getRoles(container)).filter((key) => !ignoresRoles.includes(key));
};

const fail = (message: string) => {
	return { pass: false, message: () => message };
};

const toBeAtoms = (container: HTMLElement): jest.CustomMatcherResult => {
	const keys = getRoleKeys(container);
	if (keys.length >= 2) {
		return fail('Atoms should be structured by a single role.');
	}
	if (includeGroupRole(keys)) {
		return fail('Atoms should not include group role.');
	}
	if (includeWindowRole(keys)) {
		return fail('Atoms should not include window role.');
	}
	if (includeLandmarkRole(keys) || includeMaybeLandmarkRole(keys) || includeMainRole(keys)) {
		return fail('Atoms should not include landmark role.');
	}
	return { pass: true, message: () => 'it Atoms' };
};

const toBeMolecules = (container: HTMLElement): jest.CustomMatcherResult => {
	const keys = getRoleKeys(container);
	if (!(keys.length >= 2)) {
		return fail('Molecules should be structured by multiple roles.');
	}
	if (includeLandmarkRole(keys)) {
		return fail('Molecules should not include landmark roles.');
	}
	if (includeWindowRole(keys)) {
		return fail('Molecules should not include window roles.');
	}
	if (includeMainRole(keys)) {
		return fail('Molecules should not include a main role.');
	}
	return { pass: true, message: () => 'it Molecules' };
};

const toBeOrganisms = (container: HTMLElement): jest.CustomMatcherResult => {
	const keys = getRoleKeys(container);
	if (!(keys.length >= 2)) {
		return fail('Organisms should be structured by multiple roles.');
	}
	if (!(includeLandmarkRole(keys) || includeMaybeLandmarkRole(keys) || includeWindowRole(keys))) {
		return fail('Organisms should be structured by landmark or window role.');
	}
	if (includeMainRole(keys)) {
		return fail('Organisms should not include a main role.');
	}
	return { pass: true, message: () => 'it Organisms' };
};

const toBeTemplates = (container: HTMLElement): jest.CustomMatcherResult => {
	const keys = getRoleKeys(container);
	if (!includeMainRole(keys)) {
		return fail('Templates should include a main role.');
	}
	return { pass: true, message: () => 'it Templates' };
};

expect.extend({ toBeAtoms, toBeMolecules, toBeOrganisms, toBeTemplates });
