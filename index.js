import React from 'react';
import { View } from 'react-native';
import dial from 'react-native-spacesheet/dial';

const { assign } = Object;

const styles = {};

for (let i = 1; i < 10; i++) {
	const col = dial('column', i);
	const row = dial('row', i);

	assign(styles, {
		[`Col${i}`]: { ...col, flex: 1 },
		[`Row${i}`]: { ...row, flex: 1 },
	});
}

const sheets = StyleSheet.create(styles);

const makeView = (name, sheet = null) => ({
	[name]: ({ style, ...rest }) => (
		<View {...rest} style={[sheet || sheets[name], style]} />
	),
});

const Views = {};

for (let i = 1; i < 10; i++) {
	assign(Views, makeView(`Col${i}`));
	assign(Views, makeView(`Row${i}`));
}

// Aliases
assign(Views, makeView('Col', sheets.Col1);
assign(Views, makeView('Row', sheets.Row1);

export default Views;
