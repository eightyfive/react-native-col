import { StyleSheet } from 'react-native';
import { createDialStyle } from './dial';

const col1 = createDialStyle('column', 1);
const col2 = createDialStyle('column', 2);
const col3 = createDialStyle('column', 3);
const col4 = createDialStyle('column', 4);
const col5 = createDialStyle('column', 5);
const col6 = createDialStyle('column', 6);
const col7 = createDialStyle('column', 7);
const col8 = createDialStyle('column', 8);
const col9 = createDialStyle('column', 9);

export const colStyles = StyleSheet.create({
  col: { flexDirection: 'column' },
  //
  TL: col1,
  T: col2,
  TR: col3,
  L: col4,
  C: col5,
  R: col6,
  BL: col7,
  B: col8,
  BR: col9,
  //
  TBL: { ...col1, justifyContent: 'space-between' },
  TB: { ...col2, justifyContent: 'space-between' },
  TBR: { ...col3, justifyContent: 'space-between' },
  //
  BTL: {
    ...col1,
    flexDirection: 'column-reverse',
    justifyContent: 'space-between',
  },
  BT: {
    ...col2,
    flexDirection: 'column-reverse',
    justifyContent: 'space-between',
  },
  BTR: {
    ...col3,
    flexDirection: 'column-reverse',
    justifyContent: 'space-between',
  },
  //
  LRT: { ...col2, alignItems: 'stretch' },
  LRC: { ...col5, alignItems: 'stretch' },
  LRB: { ...col8, alignItems: 'stretch' },
});

const row1 = createDialStyle('row', 1);
const row2 = createDialStyle('row', 2);
const row3 = createDialStyle('row', 3);
const row4 = createDialStyle('row', 4);
const row5 = createDialStyle('row', 5);
const row6 = createDialStyle('row', 6);
const row7 = createDialStyle('row', 7);
const row8 = createDialStyle('row', 8);
const row9 = createDialStyle('row', 9);

export const rowStyles = StyleSheet.create({
  row: { flexDirection: 'row' },
  //
  TL: row1,
  T: row2,
  TR: row3,
  L: row4,
  C: row5,
  R: row6,
  BL: row7,
  B: row8,
  BR: row9,
  //
  LRT: { ...row1, justifyContent: 'space-between' },
  LR: { ...row4, justifyContent: 'space-between' },
  LRB: { ...row7, justifyContent: 'space-between' },
  //
  RLT: {
    ...row1,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  RL: {
    ...row4,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  RLB: {
    ...row7,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  //
  TBL: { ...row4, alignItems: 'stretch' },
  TBC: { ...row5, alignItems: 'stretch' },
  TBR: { ...row6, alignItems: 'stretch' },
});

export const flexStyles = StyleSheet.create({
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
});
