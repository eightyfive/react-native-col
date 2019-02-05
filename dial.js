import { StyleSheet } from 'react-native';

export function getColProps(props) {
  return getProps('column', props);
}

export function getRowProps(props) {
  return getProps('row', props);
}

export function dialCol(dial) {
  return getStyle('column', dial);
}

export function dialRow(dial) {
  return getStyle('row', dial);
}

function getProps(dir, props) {
  const { dial = 1, flex, space, stretch, reverse, color, ...view } = props;
  const style = getStyle(dir, dial, flex, space, stretch, reverse, color);

  return [view, createStyleSheet(style)];
}

function getStyle(dir, dial, flex, space, stretch, reverse, color) {
  if (dial < 1 || dial > 9) {
    throw new TypeError('`dial` prop must be between 1 and 9');
  }

  // Main-axis
  let justifyContent;

  if (space) {
    justifyContent = `space-${space}`;
  } else if (dial) {
    justifyContent = dir === 'row' ? dialX(dial) : dialY(dial);
  } else {
    // undefined
  }

  // Cross-axis
  let alignItems;

  if (stretch) {
    alignItems = 'stretch';
  } else if (dial) {
    alignItems = dir === 'row' ? dialY(dial) : dialX(dial);
  } else {
    // undefined
  }

  return {
    flex: flex === true ? 1 : flex,
    justifyContent,
    alignItems,
    flexDirection: reverse ? `${dir}-reverse` : dir,
    backgroundColor: color,
  };
}

function dialX(dial) {
  if (dial % 3 === 0) return 'flex-end';

  if (dial % 3 === 2) return 'center';

  return 'flex-start';
}

function dialY(dial) {
  if (dial > 6) return 'flex-end';

  if (dial > 3) return 'center';

  return 'flex-start';
}

const cache = {};

function createStyleSheet(style) {
  const key = getCacheKey(style);

  if (typeof cache[key] === 'undefined') {
    Object.assign(cache, StyleSheet.create({ [key]: style }));
  }

  return cache[key];
}

function getCacheKey(style) {
  return Object.keys(style)
    .map(key => `${key}:${style[key]}`)
    .sort()
    .join(',');
}
