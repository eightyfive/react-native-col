import React from 'react';
import { View } from 'react-native';
import dial from 'react-native-spacesheet/dial';

const styles = {};

for (let i = 1; i < 10; i++) {
	const yiew = dial('column', i);
	const xiew = dial('row', i);

	styles[`col${i}`] = { ...yiew, flex: true };
	styles[`row${i}`] = { ...xiew, flex: true };

	styles[`yiew${i}`] = yiew;
	styles[`xiew${i}`] = xiew;
}

const sheets = StyleSheet.create(styles);

const makeView = name => ({
	[name]: ({ style, ...rest }) => (
		<View {...rest} style={[sheets[name.toLowerCase()], style]} />
	),
});

const { assign } = Object;
const Views = {};

for (let i = 1; i < 10; i++) {
	assign(Views, makeView(`Col${i}`));
	assign(Views, makeView(`Row${i}`));
	assign(Views, makeView(`Yiew${i}`));
	assign(Views, makeView(`Xiew${i}`));
}

export default Views;
