import React from 'react';

import $ from './styles';
import View from './view';

const o = Object;

const makeView = (space) => ({ style, ...rest }) => {
  return <View {...rest} style={[space, style]} />;
};

const Col = makeView({ flexDirection: 'column' });

o.entries($.Col).forEach(([position, style]) => {
  Col[position] = makeView(style);
});

export const Row = makeView({ flexDirection: 'row' });

o.entries($.Row).forEach(([position, style]) => {
  Row[position] = makeView(style);
});

export default Col;
