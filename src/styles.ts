import { ViewStyle } from 'react-native';

import dial from './dial';

type ColPositions =
  | 'TL'
  | 'T'
  | 'TR'
  | 'L'
  | 'C'
  | 'R'
  | 'BL'
  | 'B'
  | 'BR'
  | 'TBL'
  | 'TB'
  | 'TBR'
  | 'BTL'
  | 'BT'
  | 'BTR'
  | 'LRT'
  | 'LRC'
  | 'LRB';

type ColStyles = Record<ColPositions, ViewStyle>;

// Col
export const Col: ColStyles = {
  TL: dial('column', 1),
  T: dial('column', 2),
  TR: dial('column', 3),
  L: dial('column', 4),
  C: dial('column', 5),
  R: dial('column', 6),
  BL: dial('column', 7),
  B: dial('column', 8),
  BR: dial('column', 9),
  //
  TBL: {
    ...dial('column', 1),
    justifyContent: 'space-between',
  },
  TB: {
    ...dial('column', 2),
    justifyContent: 'space-between',
  },
  TBR: {
    ...dial('column', 3),
    justifyContent: 'space-between',
  },
  //
  BTL: {
    ...dial('column', 1),
    flexDirection: 'column-reverse',
    justifyContent: 'space-between',
  },
  BT: {
    ...dial('column', 2),
    flexDirection: 'column-reverse',
    justifyContent: 'space-between',
  },
  BTR: {
    ...dial('column', 3),
    flexDirection: 'column-reverse',
    justifyContent: 'space-between',
  },
  //
  LRT: {
    ...dial('column', 2),
    alignItems: 'stretch',
  },
  LRC: {
    ...dial('column', 5),
    alignItems: 'stretch',
  },
  LRB: {
    ...dial('column', 8),
    alignItems: 'stretch',
  },
};

// Row

type RowPositions =
  | 'TL'
  | 'T'
  | 'TR'
  | 'L'
  | 'C'
  | 'R'
  | 'BL'
  | 'B'
  | 'BR'
  | 'LRT'
  | 'LR'
  | 'LRB'
  | 'RLT'
  | 'RL'
  | 'RLB'
  | 'TBL'
  | 'TBC'
  | 'TBR';

type RowStyles = Record<RowPositions, ViewStyle>;

export const Row: RowStyles = {
  TL: dial('row', 1),
  T: dial('row', 2),
  TR: dial('row', 3),
  L: dial('row', 4),
  C: dial('row', 5),
  R: dial('row', 6),
  BL: dial('row', 7),
  B: dial('row', 8),
  BR: dial('row', 9),
  //
  LRT: {
    ...dial('row', 1),
    justifyContent: 'space-between',
  },
  LR: {
    ...dial('row', 4),
    justifyContent: 'space-between',
  },
  LRB: {
    ...dial('row', 7),
    justifyContent: 'space-between',
  },
  //
  RLT: {
    ...dial('row', 1),
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  RL: {
    ...dial('row', 4),
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  RLB: {
    ...dial('row', 7),
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  //
  TBL: {
    ...dial('row', 4),
    alignItems: 'stretch',
  },
  TBC: {
    ...dial('row', 5),
    alignItems: 'stretch',
  },
  TBR: {
    ...dial('row', 6),
    alignItems: 'stretch',
  },
};
