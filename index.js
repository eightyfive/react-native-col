import React from 'react';
import { View } from 'react-native';
//
import sheets from './sheets';

const makeView = name => ({ style, ...rest }) => (
  <View {...rest} style={[sheets[name], style]} />
);

const Col = makeView('Col');

export const Row = makeView('Row');

for (let i = 1; i < 10; i++) {
  Col[`${i}`] = makeView(`Col${i}`);
  Row[`${i}`] = makeView(`Row${i}`);
}

Col['17'] = makeView('Col17');
Col['28'] = makeView('Col28');
Col['39'] = makeView('Col39');

Row['13'] = makeView('Row13');
Row['46'] = makeView('Row46');
Row['79'] = makeView('Row79');

export default Col;
