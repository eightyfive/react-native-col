import React from 'react';
import { View as RNView } from 'react-native';

import partition from './space';

const $ = {};

[-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach((flex) => {
  $[`x${flex}`] = { flex };
});

function View({ x, ...props }) {
  if (View.sizes.length) {
    const { style, ...rest } = props;

    const [view, styles] = partition(rest, View.sizes);

    let flex = false;

    if (typeof x !== 'undefined') {
      flex = x === true ? 1 : x;
    }

    return (
      <RNView
        {...view}
        style={[...styles, flex !== false && $[`x${flex}`], style]}
      />
    );
  }

  return <RNView {...props} />;
}

View.sizes = [];

export default View;
