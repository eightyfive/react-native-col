# react-native-col

Quick & concise [`react-native`](https://github.com/facebook/react-native) Flexbox positioning (+ consistent spacing).

```
┌─────────────┐
│ TL   T   TR │
│             │
│ L    C    R │
│             │
│ BL   B   BR │
└─────────────┘
```

- [Installation](#installation)
- [Basic Usage](#basic-usage)
- [Documentation](#documentation)
  - [The `x` property](#the-x-property)
  - [Demo](#demo)
  - [`Col`](#col)
  - [`Row`](#row)
  - [Spacing](#spacing)
- [Credits](#credits)

## Installation

```
$ yarn add react-native-col
```

## Basic Usage

### Before

```js
import { View } from 'react-native';

<View
  style={{
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  }}
/>;
```

### After

```js
import { Row } from 'react-native-col';

// "Top Right"
<Row.TR />;
```

## Documentation

### The `x` property

The `x` property is an alias for the `flex` style property. It is `1` by default, but you can also specify a number between `0..9`:

```js
import Col, { Row } from 'react-native-col';

<Col x={2} />

// Equivalent:
<Row x />
<Row x={1} />

// Optional
<Col />
<Row />
```

### Demo

All demos will use these 3 RGB squares:

```js
import Col from 'react-native-col';

const $ = {
  sq: {
    width: 50,
    height: 50,
  },
  r: {
    backgroundColor: 'red',
  },
  g: {
    backgroundColor: 'green',
  },
  b: {
    backgroundColor: 'blue',
  },
};

const Red = () => <Col style={[$.sq, $.r]} />;

const Green = () => <Col style={[$.sq, $.g]} />;

const Blue = () => <Col style={[$.sq, $.b]} />;
```

### `Col`

```js
import Col from 'react-native-col';

<Col x>
  <Red />
  <Green />
  <Blue />
</Col>;
```

```js
// Top Left
<Col.TL /> // Equivalent to <Col />

// Top
<Col.T />

// Top Right
<Col.TR />

// Left
<Col.L />

// Center
<Col.C />

// Right
<Col.R />

// Bottom Left
<Col.BL />

// Bottom
<Col.B />

// Bottom Right
<Col.BR />
```

<img src="images/col-top-left.png" width="300" /> <img src="images/col-top.png" width="300" /> <img src="images/col-top-right.png" width="300" />
<img src="images/col-left.png" width="300" /> <img src="images/col-center.png" width="300" /> <img src="images/col-right.png" width="300" />
<img src="images/col-bottom-left.png" width="300" /> <img src="images/col-bottom.png" width="300" /> <img src="images/col-bottom-right.png" width="300" />

```js
// Top to Bottom, aligned Left
<Col.TBL />

// Top to Bottom
<Col.TB />

// Top to Bottom, aligned Right
<Col.TBR />

// Bottom to Top, aligned Left
<Col.BTL />

// Bottom to Top
<Col.BT />

// Bottom to Top, aligned Right
<Col.BTR />
```

<img src="images/col-top-bottom-left.png" width="300" /> <img src="images/col-top-bottom.png" width="300" /> <img src="images/col-top-bottom-right.png" width="300" />
<img src="images/col-bottom-top-left.png" width="300" /> <img src="images/col-bottom-top.png" width="300" /> <img src="images/col-bottom-top-right.png" width="300" />

### `Row`

```js
import { Row } from 'react-native-col';

<Row x>
  <Red />
  <Green />
  <Blue />
</Row>;
```

```js
// Top Left
<Row.TL /> // Equivalent to <Row />

// Top
<Row.T />

// Top Right
<Row.TR />

// Left
<Row.L />

// Center
<Row.C />

// Right
<Row.R />

// Bottom Left
<Row.BL />

// Bottom
<Row.B />

// Bottom Right
<Row.BR />
```

<img src="images/row-top-left.png" width="300" /> <img src="images/row-top.png" width="300" /> <img src="images/row-top-right.png" width="300" />
<img src="images/row-left.png" width="300" /> <img src="images/row-center.png" width="300" /> <img src="images/row-right.png" width="300" />
<img src="images/row-bottom-left.png" width="300" /> <img src="images/row-bottom.png" width="300" /> <img src="images/row-bottom-right.png" width="300" />

```js
// Left to Right, aligned Top
<Row.LRT />

// Left to Right
<Row.LR />

// Left to Right, aligned Bottom
<Row.LRB />

// Right to Left, aligned Top
<Row.RLT />

// Right to Left
<Row.RL />

// Right to Left, aligned Bottom
<Row.RLB />
```

<img src="images/row-left-right-top.png" width="300" /> <img src="images/row-left-right.png" width="300" /> <img src="images/row-left-right-bottom.png" width="300" />
<img src="images/row-right-left-top.png" width="300" /> <img src="images/row-right-left.png" width="300" /> <img src="images/row-right-left-bottom.png" width="300" />

### Spacing

#### Sizes definition

By default `react-native-col` does not handle spacing (a.k.a `margin` + `padding`).

If you wish to make use of this powerful feature, you must first specify your set of sizes like so:

```js
import View from 'react-native-col/view';

View.sizes = [0, 10, 20, 40, 80, 160];
```

This way you define 6 sizes identifiable by their index: 0 is `0`, 1 is `10`, ... 5 is `160`.

#### Shorthands

Once your sizes are defined, you can apply quick & concise `margin` & `padding` styles:

```js
import { Row } from 'react-native-col';

<Row m="4" />
// --> { margin: 80 }

<Row pt="3" />
// --> { paddingTop: 40 }

<Row mv="5" />
// --> { marginVertical: 160 }

<Row ph="1" />
// --> { paddingHorizontal: 10 }
```

It's also possible to specify `margin` and `padding` properties with an array shorthand notation (CSS-like):

```js
// All equivalent:
<Row m="3 2 3 2" />
<Row m={[3, 2, 3, 2]} />
<Row m="3 2" />
<Row m={[3, 2]} />
<Row mv="3" mh="2" />
<Row mv={3} mh={2} />
<Row mt="3" mb="3" ml="2" mr="2" />
<Row mt={3} mb={3} ml={2} mr={2} />
```

## Credits

- [`react-native-row`](https://github.com/hyrwork/react-native-row) for the initial `dial` idea
