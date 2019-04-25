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
  }}
/>;

// After
import { Row3 } from 'react-native-col';

<Row3 />;
```

## Documentation

### The `dial` notation

The package exposes 2 types of components: `Col<dial>` and `Row<dial>`.

The dial "property" is included **in the name of the component**: Col5, Row4, etc...

Think of `dial` as a phone pad. Child components will align according to the dial number:

```js
<Row5 />
```

<img src="examples/row-5.jpg" width="180" />

```js
<Col5 />
```

<img src="examples/col-5.jpg" width="180" />

### `Col<dial>`

```js
import { Col3 } from 'react-native-col';

<Col3 />
<View style={{ flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-end" }} />
```

_NB_: All styles are pre-generated and _not_ passed inline.

### `Row<dial>`

```js
import { Row6 } from 'react-native-col';

<Row6 />
<View style={{ flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }} />
```

### `Col`/`Row`

```js
import { Col, Row } from 'react-native-col';

<Col /> = <View />

<Row /> = <View style={{ flexDirection: "row" }} />
```

### `space-between`

The package also exposes additional `Col<dial>`/`Row<dial>` views describing common use cases of `justifyContent: 'space-between'`:

```js
import { Col17, Col28, Col39 } from 'react-native-col';

<Col17 />
<View style={{ flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start" }} />

<Col28 />
<View style={{ flexDirection: "column", justifyContent: "space-between", alignItems: "center" }} />

<Col39 />
<View style={{ flexDirection: "column", justifyContent: "space-between", alignItems: "flex-end" }} />
```

```js
import { Row13, Row46, Row79 } from 'react-native-col';

<Row13 />
<View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" }} />

<Row46 />
<View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} />

<Row79 />
<View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" }} />
```

## Credits

- [`react-native-row`](https://github.com/hyrwork/react-native-row) for the `dial` idea
