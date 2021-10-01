import React from 'react';
import { View } from 'react-native';

import $ from './styles';

const $col = { flexDirection: 'column' };
const $row = { flexDirection: 'row' };

const $f0 = { flex: 0 };
const $f1 = { flex: 1 };
const $f2 = { flex: 2 };
const $f3 = { flex: 3 };
const $f4 = { flex: 4 };
const $f5 = { flex: 5 };
const $f6 = { flex: 6 };
const $f7 = { flex: 7 };
const $f8 = { flex: 8 };
const $f9 = { flex: 9 };

function makeView(styles) {
  return ({ style, ...rest }) => <View {...rest} style={[...styles, style]} />;
}

// Col
const Col = makeView([$col]);

export const Col0 = makeView([$col, $f0]);
export const Col1 = makeView([$col, $f1]);
export const Col2 = makeView([$col, $f2]);
export const Col3 = makeView([$col, $f3]);
export const Col4 = makeView([$col, $f4]);
export const Col5 = makeView([$col, $f5]);
export const Col6 = makeView([$col, $f6]);
export const Col7 = makeView([$col, $f7]);
export const Col8 = makeView([$col, $f8]);
export const Col9 = makeView([$col, $f9]);

Object.entries($.Col).forEach(([position, style]) => {
  Col[position] = makeView([style]);

  Col0[position] = makeView([style, $f0]);
  Col1[position] = makeView([style, $f1]);
  Col2[position] = makeView([style, $f2]);
  Col3[position] = makeView([style, $f3]);
  Col4[position] = makeView([style, $f4]);
  Col5[position] = makeView([style, $f5]);
  Col6[position] = makeView([style, $f6]);
  Col7[position] = makeView([style, $f7]);
  Col8[position] = makeView([style, $f8]);
  Col9[position] = makeView([style, $f9]);
});

export default Col;

// Row
export const Row = makeView([$row]);

export const Row0 = makeView([$row, $f0]);
export const Row1 = makeView([$row, $f1]);
export const Row2 = makeView([$row, $f2]);
export const Row3 = makeView([$row, $f3]);
export const Row4 = makeView([$row, $f4]);
export const Row5 = makeView([$row, $f5]);
export const Row6 = makeView([$row, $f6]);
export const Row7 = makeView([$row, $f7]);
export const Row8 = makeView([$row, $f8]);
export const Row9 = makeView([$row, $f9]);

Object.entries($.Row).forEach(([position, style]) => {
  Row[position] = makeView([style]);

  Row0[position] = makeView([style, $f0]);
  Row1[position] = makeView([style, $f1]);
  Row2[position] = makeView([style, $f2]);
  Row3[position] = makeView([style, $f3]);
  Row4[position] = makeView([style, $f4]);
  Row5[position] = makeView([style, $f5]);
  Row6[position] = makeView([style, $f6]);
  Row7[position] = makeView([style, $f7]);
  Row8[position] = makeView([style, $f8]);
  Row9[position] = makeView([style, $f9]);
});
