import React, { ComponentType } from 'react';
import {
  StyleProp,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
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

type Sizes = Record<string, number>;

type SpacingProps<S extends Sizes> = {
  [Key in keyof typeof propToStyleName]?: keyof S;
};

type Props = {
  style?: StyleProp<ViewStyle>;
};

export function createBox<S extends Sizes, P extends Props>(
  sizes: S,
  BaseComponent: ComponentType<any>
) {
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
  }: P & SpacingProps<S>) => {
    const style = getSpacingStyle<S>(
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

    return <BaseComponent {...rest} style={[style, styleProp]} />;
  };
}

const cache = new Map();

function getSpacingStyle<S extends Sizes>(
  spacingProps: SpacingProps<S>,
  sizes: S
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

export function createColBox<S extends Sizes>(sizes: S) {
  return createCol<ViewProps & SpacingProps<S>>(
    createBox<S, ViewProps>(sizes, View)
  );
}

export function createRowBox<S extends Sizes>(sizes: S) {
  return createRow<ViewProps & SpacingProps<S>>(
    createBox<S, ViewProps>(sizes, View)
  );
}
