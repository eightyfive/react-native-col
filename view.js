import React from 'react';
import { View as RNView } from 'react-native';

import partition from './space';

export default function View(props) {
  if (View.sizes.length) {
    const { style, ...rest } = props;

    const [view, styles] = partition(rest, View.sizes);

    return <RNView {...view} style={[...styles, style]} />;
  }

  return <RNView {...props} />;
}

View.sizes = [];
