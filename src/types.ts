import { ReactElement } from 'react';
import { ViewProps } from 'react-native';

type ViewType<T extends ViewProps> = (
  props: T,
  context?: any
) => ReactElement<any, any> | null;

// Col
export interface ColType<T extends ViewProps> {
  (props: T, context?: any): ReactElement<any, any> | null;
  //
  TL: ViewType<T>;
  T: ViewType<T>;
  TR: ViewType<T>;
  L: ViewType<T>;
  C: ViewType<T>;
  R: ViewType<T>;
  BL: ViewType<T>;
  B: ViewType<T>;
  BR: ViewType<T>;
  //
  TBL: ViewType<T>;
  TB: ViewType<T>;
  TBR: ViewType<T>;
  //
  BTL: ViewType<T>;
  BT: ViewType<T>;
  BTR: ViewType<T>;
  //
  LRT: ViewType<T>;
  LRC: ViewType<T>;
  LRB: ViewType<T>;
}

// Row
export interface RowType<T extends ViewProps> {
  (props: T, context?: any): ReactElement<any, any> | null;
  //
  TL: ViewType<T>;
  T: ViewType<T>;
  TR: ViewType<T>;
  L: ViewType<T>;
  C: ViewType<T>;
  R: ViewType<T>;
  BL: ViewType<T>;
  B: ViewType<T>;
  BR: ViewType<T>;
  //
  LRT: ViewType<T>;
  LR: ViewType<T>;
  LRB: ViewType<T>;
  //
  RLT: ViewType<T>;
  RL: ViewType<T>;
  RLB: ViewType<T>;
  //
  TBL: ViewType<T>;
  TBC: ViewType<T>;
  TBR: ViewType<T>;
}
