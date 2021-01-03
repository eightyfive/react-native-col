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
  return o.entries(aliases).map(([alias, index]) => {
    const cacheKey = `${alias}${index}`;

    let cached = cache.get(cacheKey);

    if (!cached) {
      cached = { [byAliases[alias]]: sizes[index] };

      cache.set(cacheKey, cached);
    }

    return cached;
  });
}

export default function partition(props, sizes) {
  const [view, aliases] = partitionObject(props, (key) => !byAliases[key]);

  return [view, getStyles(aliases, sizes)];
}
