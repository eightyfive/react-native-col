import React from 'react';
import { View } from 'react-native';

import sheets from './sheets';
import * as styles from './styles';

const o = Object;

function makeView(name, position, BaseView) {
  return ({ style, ...rest }) => (
    <BaseView {...rest} style={[name && sheets[name][position], style]} />
  );
}

export function makeCol(BaseView = View) {
  const Col = makeView('Col', 'Col', BaseView);
  const positions = o.keys(styles.Col);

  for (const pos of positions) {
    Col[pos] = makeView('Col', pos, BaseView);
  }

  return Col;
}

export function makeRow(BaseView = View) {
  const Row = makeView('Row', 'Row', BaseView);
  const positions = o.keys(styles.Row);

  for (const pos of positions) {
    Row[pos] = makeView('Row', pos, BaseView);
  }

  return Row;
}
