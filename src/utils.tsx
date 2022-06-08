import React from 'react';
import { View, ViewProps, ViewStyle } from 'react-native';

export function getKeys<T>(object: T) {
  return Object.keys(object) as (keyof T)[];
}

export const $col: ViewStyle = { flexDirection: 'column' };
export const $row: ViewStyle = { flexDirection: 'row' };

export const $f0: ViewStyle = { flex: 0 };
export const $f1: ViewStyle = { flex: 1 };
export const $f2: ViewStyle = { flex: 2 };
export const $f3: ViewStyle = { flex: 3 };
export const $f4: ViewStyle = { flex: 4 };
export const $f5: ViewStyle = { flex: 5 };
export const $f6: ViewStyle = { flex: 6 };
export const $f7: ViewStyle = { flex: 7 };
export const $f8: ViewStyle = { flex: 8 };
export const $f9: ViewStyle = { flex: 9 };

export const $: Record<string, ViewStyle> = {
  col: { flexDirection: 'column' },
  row: { flexDirection: 'row' },
  //
  f0: { flex: 0 },
  f1: { flex: 1 },
  f2: { flex: 2 },
  f3: { flex: 3 },
  f4: { flex: 4 },
  f5: { flex: 5 },
  f6: { flex: 6 },
  f7: { flex: 7 },
  f8: { flex: 8 },
  f9: { flex: 9 },
};

export function makeView(styles: ViewStyle[]) {
  return function FlexView({ style, ...rest }: ViewProps) {
    return <View {...rest} style={[...styles, style]} />;
  };
}
