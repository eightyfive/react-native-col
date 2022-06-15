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
  - [`Col0`, `Col1`, `Row7`... (Flex)](#col0-col1-row7-flex)
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
import { Col } from 'react-native-col';

const $ = {
  sq: {
    minWidth: 50,
    minHeight: 50,
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
import { Col } from 'react-native-col';

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

```js
// Left-Right, justified Top
<Col.LRT />

// Left-Right, justified Center
<Col.LRC />

// Left-Right, justified Bottom
<Col.LRB />
```

<img src="images/col-left-right-top.png" width="250" /> <img src="images/col-left-right-center.png" width="250" /> <img src="images/col-left-right-bottom.png" width="250" />

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

```js
// Top-Bottom, justified Left
<Row.TBL />

// Top-Bottom, justified Center
<Row.TBC />

// Top-Bottom, justified Right
<Row.TBR />
```

<img src="images/row-top-bottom-left.png" width="250" /> <img src="images/row-top-bottom-center.png" width="250" /> <img src="images/row-top-bottom-right.png" width="250" />

### `Col0`, `Col1`, `Row7`... (Flex)

The package also exports `Col[0-9]` and `Row[0-9]` views with pre-defined `flex` values.

So instead of writing:

```js
<Col style={{ flex: 1 }}>
  <Red />
  <Green />
  <Blue />
</Col>
```

You could make use of `Col1`:

```js
import { Col1 } from 'react-native-col';

<Col1>
  <Red />
  <Green />
  <Blue />
</Col1>;
```

Here are all possible pre-defined `flex` values:

```js
import {
  Col0,
  Col1,
  Col2,
  Col3,
  Col4,
  Col5,
  Col6,
  Col7,
  Col8,
  Col9,
  //
  Row0,
  Row1,
  Row2,
  Row3,
  Row4,
  Row5,
  Row6,
  Row7,
  Row8,
  Row9,
} from 'react-native-col';
```

You can obviously use the positioning shortcuts on them:

```js
<Col6.TL />
<Col0.T />
<Col2.TR />
<Col9.L />
<Col4.C />
// ...

<Row7.TL />
<Row4.T />
// ...
```

## Credits

- [`react-native-row`](https://github.com/hyrwork/react-native-row) for the initial `dial` idea
