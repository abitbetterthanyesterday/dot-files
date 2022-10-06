import React from 'react';
import test from 'ava';
import {render} from 'ink-testing-library';
import App from './ui';
import {menuOptions} from './constants';

test('offers a menu with all the options', t => {
	const {frames} = render(<App/>);

	t.true(frames.some(f => /menu/i.test(f)));
	for (const {label} of menuOptions) {
		const regexp = new RegExp(label, 'i');
		t.true(frames.some(f => regexp.test(f)));
	}
});
