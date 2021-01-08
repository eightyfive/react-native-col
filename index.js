import React from 'react';
import { View } from 'react-native';

import $ from './styles';

const o = Object;

function makeView(flexStyle) {
  return ({ style, ...rest }) => <View {...rest} style={[flexStyle, style]} />;
}

// Row
export const Row = makeView({ flexDirection: 'row' });

o.entries($.Row).forEach(([position, style]) => {
  Row[position] = makeView(style);
});

// Col
const Col = makeView({ flexDirection: 'column' });

o.entries($.Col).forEach(([position, style]) => {
  Col[position] = makeView(style);
});

export default Col;
