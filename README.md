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
  - [`Col`](#col)
  - [`Row`](#row)
  - [`Col.X`](#colx)
  - [`Row.X`](#rowx)
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

<Col style={{ flex: 1 }}>
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
```

<img src="images/col-top-left.png" width="250" /> <img src="images/col-top.png" width="250" /> <img src="images/col-top-right.png" width="250" />

```js
// Left
<Col.L />

// Center
<Col.C />

// Right
<Col.R />
```

<img src="images/col-left.png" width="250" /> <img src="images/col-center.png" width="250" /> <img src="images/col-right.png" width="250" />

```js
// Bottom Left
<Col.BL />

// Bottom
<Col.B />

// Bottom Right
<Col.BR />
```

<img src="images/col-bottom-left.png" width="250" /> <img src="images/col-bottom.png" width="250" /> <img src="images/col-bottom-right.png" width="250" />

```js
// Top to Bottom, aligned Left
<Col.TBL />

// Top to Bottom
<Col.TB />

// Top to Bottom, aligned Right
<Col.TBR />
```

<img src="images/col-top-bottom-left.png" width="250" /> <img src="images/col-top-bottom.png" width="250" /> <img src="images/col-top-bottom-right.png" width="250" />

```js

// Bottom to Top, aligned Left
<Col.BTL />

// Bottom to Top
<Col.BT />

// Bottom to Top, aligned Right
<Col.BTR />
```

<img src="images/col-bottom-top-left.png" width="250" /> <img src="images/col-bottom-top.png" width="250" /> <img src="images/col-bottom-top-right.png" width="250" />

### `Row`

```js
import { Row } from 'react-native-col';

<Row style={{ flex: 1 }}>
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
```

<img src="images/row-top-left.png" width="250" /> <img src="images/row-top.png" width="250" /> <img src="images/row-top-right.png" width="250" />

```js
// Left
<Row.L />

// Center
<Row.C />

// Right
<Row.R />
```

<img src="images/row-left.png" width="250" /> <img src="images/row-center.png" width="250" /> <img src="images/row-right.png" width="250" />

```js
// Bottom Left
<Row.BL />

// Bottom
<Row.B />

// Bottom Right
<Row.BR />
```

<img src="images/row-bottom-left.png" width="250" /> <img src="images/row-bottom.png" width="250" /> <img src="images/row-bottom-right.png" width="250" />

```js
// Left to Right, aligned Top
<Row.LRT />

// Left to Right
<Row.LR />

// Left to Right, aligned Bottom
<Row.LRB />
```

<img src="images/row-left-right-top.png" width="250" /> <img src="images/row-left-right.png" width="250" /> <img src="images/row-left-right-bottom.png" width="250" />

```js
// Right to Left, aligned Top
<Row.RLT />

// Right to Left
<Row.RL />

// Right to Left, aligned Bottom
<Row.RLB />
```

<img src="images/row-right-left-top.png" width="250" /> <img src="images/row-right-left.png" width="250" /> <img src="images/row-right-left-bottom.png" width="250" />

### `Col.X`

Instead of writing:

```js
<Col style={{ flex: 1 }}>
  <Red />
  <Green />
  <Blue />
</Col>
```

You could make use of the `X` namespace:

```js
<Col.X>
  <Red />
  <Green />
  <Blue />
</Col.X>
```

All variations are repeated:

```js
<Col.X.TL />
<Col.X.T />
<Col.X.TR />
<Col.X.L />
<Col.X.C />
// ...
```

### `Row.X`

Same as `Col.X`.

## Credits

- [`react-native-row`](https://github.com/hyrwork/react-native-row) for the initial `dial` idea
