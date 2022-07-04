import React, { ComponentType } from 'react';
import { ViewProps } from 'react-native';
import { colStyles as cols } from './styles';
import { ColType } from './types';

export function createCol<T extends ViewProps>(Component: ComponentType<any>) {
  const Col: ColType<T> = ({ style, ...rest }) => (
    <Component {...rest} style={[cols.col, style]} />
  );
  //
  Col.TL = ({ style, ...rest }) => (
    <Component {...rest} style={[cols.TL, style]} />
  );
  Col.T = ({ style, ...rest }) => (
    <Component {...rest} style={[cols.T, style]} />
  );
  Col.TR = ({ style, ...rest }) => (
    <Component {...rest} style={[cols.TR, style]} />
  );
  Col.L = ({ style, ...rest }) => (
    <Component {...rest} style={[cols.L, style]} />
  );
  Col.C = ({ style, ...rest }) => (
    <Component {...rest} style={[cols.C, style]} />
  );
  Col.R = ({ style, ...rest }) => (
    <Component {...rest} style={[cols.R, style]} />
  );
  Col.BL = ({ style, ...rest }) => (
    <Component {...rest} style={[cols.BL, style]} />
  );
  Col.B = ({ style, ...rest }) => (
    <Component {...rest} style={[cols.B, style]} />
  );
  Col.BR = ({ style, ...rest }) => (
    <Component {...rest} style={[cols.BR, style]} />
  );
  //
  Col.TBL = ({ style, ...rest }) => (
    <Component {...rest} style={[cols.TBL, style]} />
  );
  Col.TB = ({ style, ...rest }) => (
    <Component {...rest} style={[cols.TB, style]} />
  );
  Col.TBR = ({ style, ...rest }) => (
    <Component {...rest} style={[cols.TBR, style]} />
  );
  //
  Col.BTL = ({ style, ...rest }) => (
    <Component {...rest} style={[cols.BTL, style]} />
  );
  Col.BT = ({ style, ...rest }) => (
    <Component {...rest} style={[cols.BT, style]} />
  );
  Col.BTR = ({ style, ...rest }) => (
    <Component {...rest} style={[cols.BTR, style]} />
  );
  //
  Col.LRT = ({ style, ...rest }) => (
    <Component {...rest} style={[cols.LRT, style]} />
  );
  Col.LRC = ({ style, ...rest }) => (
    <Component {...rest} style={[cols.LRC, style]} />
  );
  Col.LRB = ({ style, ...rest }) => (
    <Component {...rest} style={[cols.LRB, style]} />
  );

  return Col;
}
