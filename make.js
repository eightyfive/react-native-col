import React from 'react';

import $ from './styles';

const o = Object;

const $ = {};

[-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach((flex) => {
  $[`f${flex}`] = { flex };
});

function makeView(flexStyle, BaseView) {
  return ({ style, x = false, ...rest }) => {
    const flex = x === true ? 1 : x;

    const styles = [flexStyle, flex !== false && $[`f${flex}`], style];

    return <BaseView {...rest} style={styles} />;
  };
}

export function makeCol(BaseView) {
  const Col = makeView({ flexDirection: 'column' }, BaseView);

  o.entries($.Col).forEach(([position, style]) => {
    Col[position] = makeView(style, BaseView);
  });

  return Col;
}

export function makeRow(BaseView) {
  const Row = makeView({ flexDirection: 'row' }, BaseView);

  o.entries($.Row).forEach(([position, style]) => {
    Row[position] = makeView(style, BaseView);
  });

  return Row;
}
