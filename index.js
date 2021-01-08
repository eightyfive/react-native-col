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
  Col[position].X = makeView([style, $f1]);
});

Col.X = makeView([$col, $f1]);

export default Col;

// Row
export const Row = makeView([$row]);

o.entries($.Row).forEach(([position, style]) => {
  Row[position] = makeView([style]);
  Row[position].X = makeView([style, $f1]);
});

Row.X = makeView([$row, $f1]);

// Hor
export const Hor = {};

o.entries($.Hor).forEach(([position, style]) => {
  Hor[position] = makeView([style]);
  Hor[position].X = makeView([style, $f1]);
});

// Ver
export const Ver = {};

o.entries($.Ver).forEach(([position, style]) => {
  Ver[position] = makeView([style]);
  Ver[position].X = makeView([style, $f1]);
});
