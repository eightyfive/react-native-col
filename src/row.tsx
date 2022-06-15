import React, { ComponentType } from 'react';
import { ViewProps } from 'react-native';
import { rowStyles as rows } from './styles';
import { RowType } from './types';

export function createRow<T extends ViewProps>(
  BaseComponent: ComponentType<any>
) {
  const Row: RowType<T> = ({ style, ...rest }) => (
    <BaseComponent {...rest} style={[rows.row, style]} />
  );
  Row.TL = ({ style, ...rest }) => (
    <BaseComponent {...rest} style={[rows.TL, style]} />
  );
  Row.T = ({ style, ...rest }) => (
    <BaseComponent {...rest} style={[rows.T, style]} />
  );
  Row.TR = ({ style, ...rest }) => (
    <BaseComponent {...rest} style={[rows.TR, style]} />
  );
  Row.L = ({ style, ...rest }) => (
    <BaseComponent {...rest} style={[rows.L, style]} />
  );
  Row.C = ({ style, ...rest }) => (
    <BaseComponent {...rest} style={[rows.C, style]} />
  );
  Row.R = ({ style, ...rest }) => (
    <BaseComponent {...rest} style={[rows.R, style]} />
  );
  Row.BL = ({ style, ...rest }) => (
    <BaseComponent {...rest} style={[rows.BL, style]} />
  );
  Row.B = ({ style, ...rest }) => (
    <BaseComponent {...rest} style={[rows.B, style]} />
  );
  Row.BR = ({ style, ...rest }) => (
    <BaseComponent {...rest} style={[rows.BR, style]} />
  );
  //
  Row.LRT = ({ style, ...rest }) => (
    <BaseComponent {...rest} style={[rows.LRT, style]} />
  );
  Row.LR = ({ style, ...rest }) => (
    <BaseComponent {...rest} style={[rows.LR, style]} />
  );
  Row.LRB = ({ style, ...rest }) => (
    <BaseComponent {...rest} style={[rows.LRB, style]} />
  );
  //
  Row.RLT = ({ style, ...rest }) => (
    <BaseComponent {...rest} style={[rows.RLT, style]} />
  );
  Row.RL = ({ style, ...rest }) => (
    <BaseComponent {...rest} style={[rows.RL, style]} />
  );
  Row.RLB = ({ style, ...rest }) => (
    <BaseComponent {...rest} style={[rows.RLB, style]} />
  );
  //
  Row.TBL = ({ style, ...rest }) => (
    <BaseComponent {...rest} style={[rows.TBL, style]} />
  );
  Row.TBC = ({ style, ...rest }) => (
    <BaseComponent {...rest} style={[rows.TBC, style]} />
  );
  Row.TBR = ({ style, ...rest }) => (
    <BaseComponent {...rest} style={[rows.TBR, style]} />
  );

  return Row;
}
