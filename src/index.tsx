import React from 'react';
import { View, ViewProps } from 'react-native';

import { flexStyles as $ } from './styles';
import { createCol } from './col';
import { createRow } from './row';

export * from './box';
export * from './col';
export * from './dial';
export * from './row';
export * from './styles';
export * from './types';

// Col
export const Col = createCol<ViewProps>(View);

// Row
export const Row = createRow<ViewProps>(View);

// Col1, 2, 3...
export const Col1 = createCol(({ style, ...rest }) => (
  <View {...rest} style={[$.f1, style]} />
));
export const Col2 = createCol(({ style, ...rest }) => (
  <View {...rest} style={[$.f2, style]} />
));
export const Col3 = createCol(({ style, ...rest }) => (
  <View {...rest} style={[$.f3, style]} />
));
export const Col4 = createCol(({ style, ...rest }) => (
  <View {...rest} style={[$.f4, style]} />
));
export const Col5 = createCol(({ style, ...rest }) => (
  <View {...rest} style={[$.f5, style]} />
));
export const Col6 = createCol(({ style, ...rest }) => (
  <View {...rest} style={[$.f6, style]} />
));
export const Col7 = createCol(({ style, ...rest }) => (
  <View {...rest} style={[$.f7, style]} />
));
export const Col8 = createCol(({ style, ...rest }) => (
  <View {...rest} style={[$.f8, style]} />
));
export const Col9 = createCol(({ style, ...rest }) => (
  <View {...rest} style={[$.f9, style]} />
));

// Row1, 2, 3...
export const Row1 = createRow(({ style, ...rest }) => (
  <View {...rest} style={[$.f1, style]} />
));
export const Row2 = createRow(({ style, ...rest }) => (
  <View {...rest} style={[$.f2, style]} />
));
export const Row3 = createRow(({ style, ...rest }) => (
  <View {...rest} style={[$.f3, style]} />
));
export const Row4 = createRow(({ style, ...rest }) => (
  <View {...rest} style={[$.f4, style]} />
));
export const Row5 = createRow(({ style, ...rest }) => (
  <View {...rest} style={[$.f5, style]} />
));
export const Row6 = createRow(({ style, ...rest }) => (
  <View {...rest} style={[$.f6, style]} />
));
export const Row7 = createRow(({ style, ...rest }) => (
  <View {...rest} style={[$.f7, style]} />
));
export const Row8 = createRow(({ style, ...rest }) => (
  <View {...rest} style={[$.f8, style]} />
));
export const Row9 = createRow(({ style, ...rest }) => (
  <View {...rest} style={[$.f9, style]} />
));
