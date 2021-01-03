const o = Object;

const byAliases = {
  m: 'margin',
  mt: 'marginTop',
  mr: 'marginRight',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mv: 'marginVertical',
  mh: 'marginHorizontal',
  p: 'padding',
  pt: 'paddingTop',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  pv: 'paddingVertical',
  ph: 'paddingHorizontal',
};

const cache = new Map();

// Credits: https://github.com/lodash/lodash/issues/3172#issuecomment-352773355
function partitionObject(obj, filterFn) {
  return o.keys(obj).reduce(
    (result, key) => {
      result[filterFn(key, obj[key]) ? 0 : 1][key] = obj[key];
      return result;
    },
    [{}, {}]
  );
}

function getStyles(aliases, sizes) {
  return o.entries(aliases).map(([alias, val]) => {
    let indexes;

    if (Array.isArray(val)) {
      indexes = val;
    } else if (typeof val === 'string') {
      indexes = val.split(' ');
    } else {
      // Number
      indexes = [val];
    }

    const cacheKey = `${alias}${indexes.join('')}`;

    let cached = cache.get(cacheKey);

    if (!cached) {
      const unalias = byAliases[alias];

      console.log(indexes, unalias, indexes.length === 1, sizes[indexes[0]]);

      if (indexes.length === 1) {
        cached = {
          [unalias]: sizes[indexes[0]],
        };
      } else if (indexes.length === 2) {
        cached = {
          [`${unalias}Vertical`]: sizes[indexes[0]],
          [`${unalias}Horizontal`]: sizes[indexes[1]],
        };
      } else if (indexes.length === 3) {
        cached = {
          [`${unalias}Top`]: sizes[indexes[0]],
          [`${unalias}Horizontal`]: sizes[indexes[1]],
          [`${unalias}Bottom`]: sizes[indexes[2]],
        };
      } else if (indexes.length === 4) {
        cached = {
          [`${unalias}Top`]: sizes[indexes[0]],
          [`${unalias}Right`]: sizes[indexes[1]],
          [`${unalias}Bottom`]: sizes[indexes[2]],
          [`${unalias}Left`]: sizes[indexes[3]],
        };
      }

      cache.set(cacheKey, cached);
    }

    return cached;
  });
}

export default function partition(props, sizes) {
  const [view, aliases] = partitionObject(props, (key) => !byAliases[key]);

  return [view, getStyles(aliases, sizes)];
}
