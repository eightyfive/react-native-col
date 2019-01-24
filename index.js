import React from 'react';
import { View } from 'react-native';
//
import dial from './dial';

export function Row(props) {
  const [view, style] = dial(props, 'row');

  return <View {...view} style={[style, view.style]} />;
}

export default function Col(props) {
  const [view, style] = dial(props, 'column');

  return <View {...view} style={[style, view.style]} />;
}
