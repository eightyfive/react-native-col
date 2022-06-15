import React, { ComponentType } from 'react';
import { ViewProps } from 'react-native';
import { colStyles as cols } from './styles';
import { ColType } from './types';

export function createCol<T extends ViewProps>(
  BaseComponent: ComponentType<any>
) {
  const Col: ColType<T> = ({ style, ...rest }) => (
    <BaseComponent {...rest} style={[cols.col, style]} />
  );
  //
  Col.TL = ({ style, ...rest }) => (
    <BaseComponent {...rest} style={[cols.TL, style]} />
  );
  Col.T = ({ style, ...rest }) => (
    <BaseComponent {...rest} style={[cols.T, style]} />
  );
  Col.TR = ({ style, ...rest }) => (
    <BaseComponent {...rest} style={[cols.TR, style]} />
  );
  Col.L = ({ style, ...rest }) => (
    <BaseComponent {...rest} style={[cols.L, style]} />
  );
  Col.C = ({ style, ...rest }) => (
    <BaseComponent {...rest} style={[cols.C, style]} />
  );
  Col.R = ({ style, ...rest }) => (
    <BaseComponent {...rest} style={[cols.R, style]} />
  );
  Col.BL = ({ style, ...rest }) => (
    <BaseComponent {...rest} style={[cols.BL, style]} />
  );
  Col.B = ({ style, ...rest }) => (
    <BaseComponent {...rest} style={[cols.B, style]} />
  );
  Col.BR = ({ style, ...rest }) => (
    <BaseComponent {...rest} style={[cols.BR, style]} />
  );
  //
  Col.TBL = ({ style, ...rest }) => (
    <BaseComponent {...rest} style={[cols.TBL, style]} />
  );
  Col.TB = ({ style, ...rest }) => (
    <BaseComponent {...rest} style={[cols.TB, style]} />
  );
  Col.TBR = ({ style, ...rest }) => (
    <BaseComponent {...rest} style={[cols.TBR, style]} />
  );
  //
  Col.BTL = ({ style, ...rest }) => (
    <BaseComponent {...rest} style={[cols.BTL, style]} />
  );
  Col.BT = ({ style, ...rest }) => (
    <BaseComponent {...rest} style={[cols.BT, style]} />
  );
  Col.BTR = ({ style, ...rest }) => (
    <BaseComponent {...rest} style={[cols.BTR, style]} />
  );
  //
  Col.LRT = ({ style, ...rest }) => (
    <BaseComponent {...rest} style={[cols.LRT, style]} />
  );
  Col.LRC = ({ style, ...rest }) => (
    <BaseComponent {...rest} style={[cols.LRC, style]} />
  );
  Col.LRB = ({ style, ...rest }) => (
    <BaseComponent {...rest} style={[cols.LRB, style]} />
  );

  return Col;
}
