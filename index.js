import React from 'react';
import { View } from 'react-native';
//
import sheets from './sheets';

const makeView = name => ({ style, ...rest }) => (
  <View {...rest} style={[sheets[name], style]} />
);

const Views = {
  Col: View,
  Row: makeView('Row'),

  Col17: makeView('Col17'),
  Col28: makeView('Col28'),
  Col39: makeView('Col39'),

  Row13: makeView('Row13'),
  Row46: makeView('Row46'),
  Row79: makeView('Row79'),
};

const { assign } = Object;

for (let i = 1; i < 10; i++) {
  const col = `Col${i}`;
  const row = `Row${i}`;

  assign(Views, {
    [col]: makeView(col),
    [row]: makeView(row),
  });
}

export default Views;
