import React from 'react';
import { View } from 'react-native';

import $ from './styles';

const o = Object;

const $col = { flexDirection: 'column' };
const $row = { flexDirection: 'row' };
const $f1 = { flex: 1 };

function makeView(styles) {
  return ({ style, ...rest }) => <View {...rest} style={[...styles, style]} />;
}

// Col
const Col = makeView([$col]);

o.entries($.Col).forEach(([position, style]) => {
  Col[position] = makeView([style]);
});

// Col.X
Col.X = makeView([$col, $f1]);

o.entries($.Row).forEach(([position, style]) => {
  Col.X[position] = makeView([style, $f1]);
});

export default Col;

// Row
export const Row = makeView([$row]);

o.entries($.Row).forEach(([position, style]) => {
  Row[position] = makeView([style]);
});

// Row.X
Row.X = makeView([$row, $f1]);

o.entries($.Row).forEach(([position, style]) => {
  Row.X[position] = makeView([style, $f1]);
});
