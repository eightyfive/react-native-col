import React from 'react';
import { View } from 'react-native';
//
import sheets from './sheets';

const makeView = (name, side) => ({ style, ...rest }) => (
  <View {...rest} style={[name && sheets[name][side], style]} />
);

export const Row = makeView('Row', 'Row');

Row.TL = makeView('Row', 'TL');
Row.T = makeView('Row', 'T');
Row.TR = makeView('Row', 'TR');
Row.L = makeView('Row', 'L');
Row.C = makeView('Row', 'C');
Row.R = makeView('Row', 'R');
Row.BL = makeView('Row', 'BL');
Row.B = makeView('Row', 'B');
Row.BR = makeView('Row', 'BR');
//
Row.LRT = makeView('Row', 'LRT');
Row.LR = makeView('Row', 'LR');
Row.LRB = makeView('Row', 'LRB');
Row.RLT = makeView('Row', 'RLT');
Row.RL = makeView('Row', 'RL');
Row.RLB = makeView('Row', 'RLB');

const Col = makeView();

Col.TL = makeView('Col', 'TL');
Col.T = makeView('Col', 'T');
Col.TR = makeView('Col', 'TR');
Col.L = makeView('Col', 'L');
Col.C = makeView('Col', 'C');
Col.R = makeView('Col', 'R');
Col.BL = makeView('Col', 'BL');
Col.B = makeView('Col', 'B');
Col.BR = makeView('Col', 'BR');
//
Col.TBL = makeView('Col', 'TBL');
Col.TB = makeView('Col', 'TB');
Col.TBR = makeView('Col', 'TBR');
Col.BTL = makeView('Col', 'BTL');
Col.BT = makeView('Col', 'BT');
Col.BTR = makeView('Col', 'BTR');

export default Col;
