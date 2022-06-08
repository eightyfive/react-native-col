import { FC } from 'react';
import { ViewProps } from 'react-native';

import { Col as ColStyles, Row as RowStyles } from './styles';
import { getKeys, makeView, $ } from './utils';

// Col
type ColT = Record<keyof typeof ColStyles, FC<ViewProps>> & FC<ViewProps>;

// @ts-ignore
export const Col: ColT = makeView([$.col]);
//
// @ts-ignore
export const Col0: ColT = makeView([$.col, $.f0]);
// @ts-ignore
export const Col1: ColT = makeView([$.col, $.f1]);
// @ts-ignore
export const Col2: ColT = makeView([$.col, $.f2]);
// @ts-ignore
export const Col3: ColT = makeView([$.col, $.f3]);
// @ts-ignore
export const Col4: ColT = makeView([$.col, $.f4]);
// @ts-ignore
export const Col5: ColT = makeView([$.col, $.f5]);
// @ts-ignore
export const Col6: ColT = makeView([$.col, $.f6]);
// @ts-ignore
export const Col7: ColT = makeView([$.col, $.f7]);
// @ts-ignore
export const Col8: ColT = makeView([$.col, $.f8]);
// @ts-ignore
export const Col9: ColT = makeView([$.col, $.f9]);

for (let position of getKeys(ColStyles)) {
  const style = ColStyles[position];

  Col[position] = makeView([style]);
  //
  Col0[position] = makeView([style, $.f0]);
  Col1[position] = makeView([style, $.f1]);
  Col2[position] = makeView([style, $.f2]);
  Col3[position] = makeView([style, $.f3]);
  Col4[position] = makeView([style, $.f4]);
  Col5[position] = makeView([style, $.f5]);
  Col6[position] = makeView([style, $.f6]);
  Col7[position] = makeView([style, $.f7]);
  Col8[position] = makeView([style, $.f8]);
  Col9[position] = makeView([style, $.f9]);
}

// Row
type RowT = Record<keyof typeof RowStyles, FC<ViewProps>> & FC<ViewProps>;

// @ts-ignore
export const Row: RowT = makeView([$.row]);
//
// @ts-ignore
export const Row0: RowT = makeView([$.row, $.f0]);
// @ts-ignore
export const Row1: RowT = makeView([$.row, $.f1]);
// @ts-ignore
export const Row2: RowT = makeView([$.row, $.f2]);
// @ts-ignore
export const Row3: RowT = makeView([$.row, $.f3]);
// @ts-ignore
export const Row4: RowT = makeView([$.row, $.f4]);
// @ts-ignore
export const Row5: RowT = makeView([$.row, $.f5]);
// @ts-ignore
export const Row6: RowT = makeView([$.row, $.f6]);
// @ts-ignore
export const Row7: RowT = makeView([$.row, $.f7]);
// @ts-ignore
export const Row8: RowT = makeView([$.row, $.f8]);
// @ts-ignore
export const Row9: RowT = makeView([$.row, $.f9]);

for (let position of getKeys(RowStyles)) {
  const style = RowStyles[position];

  Row[position] = makeView([style]);
  //
  Row0[position] = makeView([style, $.f0]);
  Row1[position] = makeView([style, $.f1]);
  Row2[position] = makeView([style, $.f2]);
  Row3[position] = makeView([style, $.f3]);
  Row4[position] = makeView([style, $.f4]);
  Row5[position] = makeView([style, $.f5]);
  Row6[position] = makeView([style, $.f6]);
  Row7[position] = makeView([style, $.f7]);
  Row8[position] = makeView([style, $.f8]);
  Row9[position] = makeView([style, $.f9]);
}
