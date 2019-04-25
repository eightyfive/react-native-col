# react-native-col

A wrapper around [`react-native`](https://github.com/facebook/react-native) `<View />` enabling quick [Flexbox](https://facebook.github.io/react-native/docs/flexbox) positioning.

The idea is to keep JSX as clean & concise as possible, while also providing some nice semantic.

## Installation

```
$ yarn add react-native-col
```

## Basic Usage

```js
// Before
import { View } from 'react-native';

<View
  style={{
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    flex: 1,
  }}
/>;

// After
import { Row } from 'react-native-col';

<Row.3 />;
```

## Documentation

### The `dial` notation

Think of `dial` as a phone pad. Child components will align according to the dial number:

```js
<Row.5 />
```

<img src="examples/row-5.jpg" width="180" />

```js
<Col.5 />
```

<img src="examples/col-5.jpg" width="180" />

### `Col`

```js
import Col from 'react-native-col';

<Col.3 />

// Equivalent
<View style={{ flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-end", flex: 1 }} />
```

_NB_: All styles are pre-generated and _not_ passed inline.

### `Row`

```js
import { Row } from 'react-native-col';

<Row.6 />

// Equivalent
<View style={{ flexDirection: "row", justifyContent: "flex-end", alignItems: "center", flex: 1 }} />
```

## `space-between`

There are some additional sub-`Col`/`Row` views to deal with common use case of `justifyContent: 'space-between'`:

```js
import Col from 'react-native-col';

<Col.17 />
<View style={{ flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", flex: 1 }} />

<Col.28 />
<View style={{ flexDirection: "column", justifyContent: "space-between", alignItems: "center", flex: 1 }} />

<Col.39 />
<View style={{ flexDirection: "column", justifyContent: "space-between", alignItems: "flex-end", flex: 1 }} />
```

```js
import { Row } from 'react-native-col';

<Row.13 />
<View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", flex: 1 }} />

<Row.46 />
<View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", flex: 1 }} />

<Row.79 />
<View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end", flex: 1 }} />
```

## Credits

- [`react-native-row`](https://github.com/hyrwork/react-native-row) for the `dial` idea
