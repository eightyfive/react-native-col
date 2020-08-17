import React from 'react';

import sheets from './sheets';
import * as styles from './styles';

const o = Object;

function makeView(name, position, BaseView) {
  return ({ style, ...rest }) => {
    return <BaseView style={[sheets[name][position], style]} {...rest} />;
  };
}

export function makeCol(BaseView) {
  const Col = makeView('Col', 'Col', BaseView);
  const positions = o.keys(styles.Col);

  for (const pos of positions) {
    Col[pos] = makeView('Col', pos, BaseView);
  }

  return Col;
}

export function makeRow(BaseView) {
  const Row = makeView('Row', 'Row', BaseView);
  const positions = o.keys(styles.Row);

  for (const pos of positions) {
    Row[pos] = makeView('Row', pos, BaseView);
  }

  return Row;
}
