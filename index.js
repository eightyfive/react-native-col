import React from 'react';
import { View } from 'react-native';
//
import sheets from './sheets';

const makeView = name => ({ style, ...rest }) => (
  <View {...rest} style={[sheets[name], style]} />
);

export const Col = View;
export const Row = makeView('Row');

export const Col1 = makeView('Col1');
export const Col2 = makeView('Col2');
export const Col3 = makeView('Col3');
export const Col4 = makeView('Col4');
export const Col5 = makeView('Col5');
export const Col6 = makeView('Col6');
export const Col7 = makeView('Col7');
export const Col8 = makeView('Col8');
export const Col9 = makeView('Col9');

export const Row1 = makeView('Row1');
export const Row2 = makeView('Row2');
export const Row3 = makeView('Row3');
export const Row4 = makeView('Row4');
export const Row5 = makeView('Row5');
export const Row6 = makeView('Row6');
export const Row7 = makeView('Row7');
export const Row8 = makeView('Row8');
export const Row9 = makeView('Row9');

export const Col17 = makeView('Col17');
export const Col28 = makeView('Col28');
export const Col39 = makeView('Col39');

export const Row13 = makeView('Row13');
export const Row46 = makeView('Row46');
export const Row79 = makeView('Row79');

export default Col;
