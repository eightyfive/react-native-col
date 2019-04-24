# react-native-col

A wrapper around the [`react-native`](https://github.com/facebook/react-native) `<View/>` component enabling concise assignment of flexbox layout properties.

The idea is to keep JSX as clean as possible, while removing the need to manage stylesheet declarations for common positioning needs.

## Installation

```
$ yarn add react-native-col
```

## Basic Usage

```js
// Before
<View style={{ flexDirection: "row", justifyContent: "flex-end", alignItems: "flex-start", flex: true }} />

// After
<Row3 />
```

## Documentation

### The `dial` "property"

The package exposes 2 types of components: `Col<dial>` and `Row<dial>`.

The `dial` "property" is included in the name of the component instead of passing it as a normal React `property`: `Col5`, `Row4`, etc...

The idea behind the dial notation, is to position the child components of `Row`/`Col` according to the position of the dial number on a phone pad. Hence the `dial` "property" must be between `1` and `9` (inclusive).

Let's see some examples from the Flexbox [official documentation](https://facebook.github.io/react-native/docs/flexbox).

[Flex Direction](https://facebook.github.io/react-native/docs/flexbox#flex-direction):

```js
<View style={{flex: 1, flexDirection: 'row'}}>
	<View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
	<View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
	<View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
</View>

// Becomes
<Row1>
	<View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
	<View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
	<View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
</Row1>
```

[Justify Content](https://facebook.github.io/react-native/docs/flexbox#justify-content):

```js
<View style={{
	flex: 1,
	flexDirection: 'column',
	justifyContent: 'space-between',
}}>
	<View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
	<View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
	<View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
</View>

// Becomes
<Col style={{ justifyContent: 'space-between' }}>
	<View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
	<View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
	<View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
</Col>
```

_Note_: `Col1` & `Row1` are aliased `Col` & `Row`.

[Align Items](https://facebook.github.io/react-native/docs/flexbox#align-items):

```js
<View style={{
	flex: 1,
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'stretch',
}}>
	<View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
	<View style={{height: 50, backgroundColor: 'skyblue'}} />
	<View style={{height: 100, backgroundColor: 'steelblue'}} />
</View>

// Becomes
<Col4 style={{ alignItems: 'stretch' }}>
	<View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
	<View style={{height: 50, backgroundColor: 'skyblue'}} />
	<View style={{height: 100, backgroundColor: 'steelblue'}} />
</Col4>
```

And some more examples:

```js
<Row5 />
```

<img src="examples/row-5.jpg" width="180" />

```js
<Col5 />
```

<img src="examples/col-5.jpg" width="180" />

### `Col<dial>`

`Col<dial>` is a React Native `View` with Y main axis and `flex: 1`.

```js
import { Col3 } from 'react-native-col';

<Col3 />
<View style={{ flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-end", flex: 1 }} />
```

_NB_: All styles are generated and _not_ passed inline.

### `Row<dial>`

`Row<dial>` is a React Native `View` with X main axis and `flex: 1`.

```js
import { Row6 } from 'react-native-col';

<Row6 />
<View style={{ flexDirection: "row", justifyContent: "flex-end", alignItems: "center", flex: 1 }} />
```

## Credits

_ALL_ credit goes to the [`react-native-row`](https://github.com/hyrwork/react-native-row) library.

The main difference with [`react-native-row`](https://github.com/hyrwork/react-native-row) is the separation of the margin/padding properties into a much more powerful standalone library `react-native-spacesheet`:

https://github.com/eightyfive/react-native-spacesheet

So `react-native-col` is just a cleaner / more focused version (dial only) of [`react-native-row`](https://github.com/hyrwork/react-native-row).
