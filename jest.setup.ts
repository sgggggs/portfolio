import '@testing-library/jest-dom';
import { TextEncoder } from 'util';
import React from 'react';

Object.defineProperty(window, 'matchMedia', {
	writable: true,
	value: jest.fn().mockImplementation(() => ({
		matches: false,
		media: 'query',
		onchange: null,
		addListener: jest.fn(),
		removeListener: jest.fn(),
		addEventListener: jest.fn(),
		removeEventListener: jest.fn(),
		dispatchEvent: jest.fn(),
	})),
});

global.React = React;
global.TextEncoder = TextEncoder;
