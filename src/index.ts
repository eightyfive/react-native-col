import { FC, ForwardRefExoticComponent } from 'react';
import { ViewProps } from 'react-native';

import { Col as ColStyles, Row as RowStyles } from './styles';
import { getKeys, createView, $ } from './utils';

// Col
type ColT = Record<
  keyof typeof ColStyles,
  ForwardRefExoticComponent<ViewProps>
> &
  ForwardRefExoticComponent<ViewProps>;

// @ts-ignore
export const Col: ColT = createView([$.col]);
//
// @ts-ignore
export const Col0: ColT = createView([$.col, $.f0]);
// @ts-ignore
export const Col1: ColT = createView([$.col, $.f1]);
// @ts-ignore
export const Col2: ColT = createView([$.col, $.f2]);
// @ts-ignore
export const Col3: ColT = createView([$.col, $.f3]);
// @ts-ignore
export const Col4: ColT = createView([$.col, $.f4]);
// @ts-ignore
export const Col5: ColT = createView([$.col, $.f5]);
// @ts-ignore
export const Col6: ColT = createView([$.col, $.f6]);
// @ts-ignore
export const Col7: ColT = createView([$.col, $.f7]);
// @ts-ignore
export const Col8: ColT = createView([$.col, $.f8]);
// @ts-ignore
export const Col9: ColT = createView([$.col, $.f9]);

for (let position of getKeys(ColStyles)) {
  const style = ColStyles[position];

  Col[position] = createView([style]);
  //
  Col0[position] = createView([style, $.f0]);
  Col1[position] = createView([style, $.f1]);
  Col2[position] = createView([style, $.f2]);
  Col3[position] = createView([style, $.f3]);
  Col4[position] = createView([style, $.f4]);
  Col5[position] = createView([style, $.f5]);
  Col6[position] = createView([style, $.f6]);
  Col7[position] = createView([style, $.f7]);
  Col8[position] = createView([style, $.f8]);
  Col9[position] = createView([style, $.f9]);
}

// Row
type RowT = Record<keyof typeof RowStyles, FC<ViewProps>> & FC<ViewProps>;

// @ts-ignore
export const Row: RowT = createView([$.row]);
//
// @ts-ignore
export const Row0: RowT = createView([$.row, $.f0]);
// @ts-ignore
export const Row1: RowT = createView([$.row, $.f1]);
// @ts-ignore
export const Row2: RowT = createView([$.row, $.f2]);
// @ts-ignore
export const Row3: RowT = createView([$.row, $.f3]);
// @ts-ignore
export const Row4: RowT = createView([$.row, $.f4]);
// @ts-ignore
export const Row5: RowT = createView([$.row, $.f5]);
// @ts-ignore
export const Row6: RowT = createView([$.row, $.f6]);
// @ts-ignore
export const Row7: RowT = createView([$.row, $.f7]);
// @ts-ignore
export const Row8: RowT = createView([$.row, $.f8]);
// @ts-ignore
export const Row9: RowT = createView([$.row, $.f9]);

for (let position of getKeys(RowStyles)) {
  const style = RowStyles[position];

  Row[position] = createView([style]);
  //
  Row0[position] = createView([style, $.f0]);
  Row1[position] = createView([style, $.f1]);
  Row2[position] = createView([style, $.f2]);
  Row3[position] = createView([style, $.f3]);
  Row4[position] = createView([style, $.f4]);
  Row5[position] = createView([style, $.f5]);
  Row6[position] = createView([style, $.f6]);
  Row7[position] = createView([style, $.f7]);
  Row8[position] = createView([style, $.f8]);
  Row9[position] = createView([style, $.f9]);
}
