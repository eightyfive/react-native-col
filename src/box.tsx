import React from 'react';
import { StyleSheet, View, ViewProps, ViewStyle } from 'react-native';
import { createCol } from './col';
import { createRow } from './row';

function getKeys<T>(object: T) {
  return Object.keys(object) as (keyof T)[];
}

type MarginProperties =
  | 'm'
  | 'mt'
  | 'mr'
  | 'mb'
  | 'ml'
  | 'mx'
  | 'my'
  | 'ms'
  | 'me';

type MarginStyleNames =
  | 'margin'
  | 'marginTop'
  | 'marginRight'
  | 'marginBottom'
  | 'marginLeft'
  | 'marginHorizontal'
  | 'marginVertical'
  | 'marginStart'
  | 'marginEnd';

type PaddingProperties =
  | 'p'
  | 'pt'
  | 'pr'
  | 'pb'
  | 'pl'
  | 'px'
  | 'py'
  | 'ps'
  | 'pe';

type PaddingStyleNames =
  | 'padding'
  | 'paddingTop'
  | 'paddingRight'
  | 'paddingBottom'
  | 'paddingLeft'
  | 'paddingHorizontal'
  | 'paddingVertical'
  | 'paddingStart'
  | 'paddingEnd';

const propToStyleName: Record<
  MarginProperties | PaddingProperties,
  MarginStyleNames | PaddingStyleNames
> = {
  m: 'margin',
  mt: 'marginTop',
  mr: 'marginRight',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mx: 'marginHorizontal',
  my: 'marginVertical',
  ms: 'marginStart',
  me: 'marginEnd',
  //
  p: 'padding',
  pt: 'paddingTop',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  px: 'paddingHorizontal',
  py: 'paddingVertical',
  ps: 'paddingStart',
  pe: 'paddingEnd',
};

type SizesT = Record<string, number>;

type SpacingProps<T extends SizesT> = {
  [Key in keyof typeof propToStyleName]?: keyof T;
};

export function createBox<T extends SizesT>(sizes: T) {
  return ({
    style: styleProp,
    m,
    mt,
    mr,
    mb,
    ml,
    mx,
    my,
    ms,
    me,
    //
    p,
    pt,
    pr,
    pb,
    pl,
    px,
    py,
    ps,
    pe,
    ...rest
  }: ViewProps & SpacingProps<T>) => {
    const style = getSpacingStyle<T>(
      {
        m,
        mt,
        mr,
        mb,
        ml,
        mx,
        my,
        ms,
        me,
        //
        p,
        pt,
        pr,
        pb,
        pl,
        px,
        py,
        ps,
        pe,
      },
      sizes
    );

    return <View {...rest} style={[style, styleProp]} />;
  };
}

const cache = new Map();

function getSpacingStyle<T extends SizesT>(
  spacingProps: SpacingProps<T>,
  sizes: T
) {
  const cacheKey = JSON.stringify(spacingProps);

  if (!cache.has(cacheKey)) {
    const style: ViewStyle = {};
    const spacingPropNames = getKeys(spacingProps);

    spacingPropNames.forEach((propName) => {
      const sizeName = spacingProps[propName];

      if (sizeName) {
        style[propToStyleName[propName]] = sizes[sizeName];
      }
    });

    const { container } = StyleSheet.create({ container: style });

    cache.set(cacheKey, container);
  }

  return cache.get(cacheKey);
}

export function createColBox<T extends SizesT>(sizes: T) {
  return createCol<ViewProps & SpacingProps<T>>(createBox<T>(sizes));
}

export function createRowBox<T extends SizesT>(sizes: T) {
  return createRow<ViewProps & SpacingProps<T>>(createBox<T>(sizes));
}
