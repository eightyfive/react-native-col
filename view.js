import React from 'react';
import { View as RNView } from 'react-native';

import partition from './space';

const $ = {};

[-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach((flex) => {
  $[`x${flex}`] = { flex };
});

function View({ style, x, ...rest }) {
  let flex = false;

  if (typeof x !== 'undefined') {
    flex = x === true ? 1 : x;
  }

  const styles = [flex !== false && $[`x${flex}`], style];

  if (View.sizes.length) {
    const [view, spaces] = partition(rest, View.sizes);

    return <RNView {...view} style={spaces.concat(styles)} />;
  }

  return <RNView {...rest} style={styles} />;
}

View.sizes = [];

export default View;
