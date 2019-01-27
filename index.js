import React from 'react';
import { View } from 'react-native';
//
import { getColProps, getRowProps } from './dial';

export function Row(props) {
  const [view, style] = getRowProps(props);

  return <View {...view} style={[style, view.style]} />;
}

export default function Col(props) {
  const [view, style] = getColProps(props);

  return <View {...view} style={[style, view.style]} />;
}
