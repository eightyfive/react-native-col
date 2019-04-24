# react-native-col

A wrapper around [`react-native`](https://github.com/facebook/react-native) `<View />` enabling quick [Flexbox](https://facebook.github.io/react-native/docs/flexbox) positioning.

The idea is to keep JSX as clean and concise as possible, while also providing some nice semantic.

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
		flex: true,
	}}
/>;

// After
import { Row3 } from 'react-native-col';

<Row3 />;
```

## Documentation

### The `dial` notation

The package exposes 2 types of components: `Col<dial>` and `Row<dial>`.

The `dial` "property" is included **in the name of the component**: `Col5`, `Row4`, etc...

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

`Col<dial>` is a [`View`](https://facebook.github.io/react-native/docs/view) with `flexDirection: 'column'` and `flex: 1`.

```js
import { Col3 } from 'react-native-col';

<Col3 />

// Equivalent
<View style={{ flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-end", flex: 1 }} />
```

_NB_: All styles are pre-generated and _not_ passed inline.

### `Row<dial>`

`Row<dial>` is a [`View`](https://facebook.github.io/react-native/docs/view) with `flexDirection: 'row'` and `flex: 1`.

```js
import { Row6 } from 'react-native-col';

<Row6 />

// Equivalent
<View style={{ flexDirection: "row", justifyContent: "flex-end", alignItems: "center", flex: 1 }} />
```

## Credits

_ALL_ credit goes to the [`react-native-row`](https://github.com/hyrwork/react-native-row) library.

The main difference with [`react-native-row`](https://github.com/hyrwork/react-native-row) is the separation of the margin/padding properties into a much more powerful standalone library `react-native-spacesheet`:

https://github.com/eightyfive/react-native-spacesheet

So `react-native-col` is just a cleaner / more focused version (dial only) of [`react-native-row`](https://github.com/hyrwork/react-native-row).
