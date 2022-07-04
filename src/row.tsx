import React, { ComponentType } from 'react';
import { ViewProps } from 'react-native';
import { rowStyles as rows } from './styles';
import { RowType } from './types';

export function createRow<T extends ViewProps>(Component: ComponentType<any>) {
  const Row: RowType<T> = ({ style, ...rest }) => (
    <Component {...rest} style={[rows.row, style]} />
  );
  Row.TL = ({ style, ...rest }) => (
    <Component {...rest} style={[rows.TL, style]} />
  );
  Row.T = ({ style, ...rest }) => (
    <Component {...rest} style={[rows.T, style]} />
  );
  Row.TR = ({ style, ...rest }) => (
    <Component {...rest} style={[rows.TR, style]} />
  );
  Row.L = ({ style, ...rest }) => (
    <Component {...rest} style={[rows.L, style]} />
  );
  Row.C = ({ style, ...rest }) => (
    <Component {...rest} style={[rows.C, style]} />
  );
  Row.R = ({ style, ...rest }) => (
    <Component {...rest} style={[rows.R, style]} />
  );
  Row.BL = ({ style, ...rest }) => (
    <Component {...rest} style={[rows.BL, style]} />
  );
  Row.B = ({ style, ...rest }) => (
    <Component {...rest} style={[rows.B, style]} />
  );
  Row.BR = ({ style, ...rest }) => (
    <Component {...rest} style={[rows.BR, style]} />
  );
  //
  Row.LRT = ({ style, ...rest }) => (
    <Component {...rest} style={[rows.LRT, style]} />
  );
  Row.LR = ({ style, ...rest }) => (
    <Component {...rest} style={[rows.LR, style]} />
  );
  Row.LRB = ({ style, ...rest }) => (
    <Component {...rest} style={[rows.LRB, style]} />
  );
  //
  Row.RLT = ({ style, ...rest }) => (
    <Component {...rest} style={[rows.RLT, style]} />
  );
  Row.RL = ({ style, ...rest }) => (
    <Component {...rest} style={[rows.RL, style]} />
  );
  Row.RLB = ({ style, ...rest }) => (
    <Component {...rest} style={[rows.RLB, style]} />
  );
  //
  Row.TBL = ({ style, ...rest }) => (
    <Component {...rest} style={[rows.TBL, style]} />
  );
  Row.TBC = ({ style, ...rest }) => (
    <Component {...rest} style={[rows.TBC, style]} />
  );
  Row.TBR = ({ style, ...rest }) => (
    <Component {...rest} style={[rows.TBR, style]} />
  );

  return Row;
}
