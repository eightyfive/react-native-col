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

### `Col`

```js
import Col from 'react-native-col';

// RGB squares
const $ = {
  square: {
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

function Demo() {
  return (
    <Col x>
      <Red />
      <Green />
      <Blue />
    </Col>
  );
}
```

#### Top Left

```js
<Col.TL x>
  <Red />
  <Green />
  <Blue />
</Col.TL>
```

<img src="images/col-top-left.png" width="320" />

```json
{
  "flexDirection": "column",
  "justifyContent": "flex-start",
  "alignItems": "flex-start"
}
```

#### Top

```js
<Col.T x>
  <Red />
  <Green />
  <Blue />
</Col.T>
```

<img src="images/col-top.png" width="320" />

```json
{
  "flexDirection": "column",
  "justifyContent": "flex-start",
  "alignItems": "center"
}
```

#### Top Right

```js
<Col.TR x>
  <Red />
  <Green />
  <Blue />
</Col.TR>
```

<img src="images/col-top-right.png" width="320" />

```json
{
  "flexDirection": "column",
  "justifyContent": "flex-start",
  "alignItems": "flex-end"
}
```

#### Left

```js
<Col.L x>
  <Red />
  <Green />
  <Blue />
</Col.L>
```

<img src="images/col-left.png" width="320" />

```json
{
  "flexDirection": "column",
  "justifyContent": "center",
  "alignItems": "flex-start"
}
```

#### Center

```js
<Col.C x>
  <Red />
  <Green />
  <Blue />
</Col.C>
```

<img src="images/col-center.png" width="320" />

```json
{
  "flexDirection": "column",
  "justifyContent": "center",
  "alignItems": "center"
}
```

#### Right

```js
<Col.R x>
  <Red />
  <Green />
  <Blue />
</Col.R>
```

<img src="images/col-right.png" width="320" />

```json
{
  "flexDirection": "column",
  "justifyContent": "center",
  "alignItems": "flex-end"
}
```

#### Bottom Left

```js
<Col.BL x>
  <Red />
  <Green />
  <Blue />
</Col.BL>
```

<img src="images/col-bottom-left.png" width="320" />

```json
{
  "flexDirection": "column",
  "justifyContent": "flex-end",
  "alignItems": "flex-start"
}
```

#### Bottom

```js
<Col.B x>
  <Red />
  <Green />
  <Blue />
</Col.B>
```

<img src="images/col-bottom.png" width="320" />

```json
{
  "flexDirection": "column",
  "justifyContent": "flex-end",
  "alignItems": "center"
}
```

#### Bottom Right

```js
<Col.BR x>
  <Red />
  <Green />
  <Blue />
</Col.BR>
```

<img src="images/col-bottom-right.png" width="320" />

```json
{
  "flexDirection": "column",
  "justifyContent": "flex-end",
  "alignItems": "flex-end"
}
```

#### Top to Bottom, aligned Left

```js
<Col.TBL x>
  <Red />
  <Green />
  <Blue />
</Col.TBL>
```

<img src="images/col-top-bottom-left.png" width="320" />

```json
{
  "flexDirection": "column",
  "justifyContent": "space-between",
  "alignItems": "flex-start"
}
```

#### Top to Bottom

```js
<Col.TB x>
  <Red />
  <Green />
  <Blue />
</Col.TB>
```

<img src="images/col-top-bottom.png" width="320" />

```json
{
  "flexDirection": "column",
  "justifyContent": "space-between",
  "alignItems": "center"
}
```

#### Top to Bottom, aligned Right

```js
<Col.TBR x>
  <Red />
  <Green />
  <Blue />
</Col.TBR>
```

<img src="images/col-top-bottom-right.png" width="320" />

```json
{
  "flexDirection": "column",
  "justifyContent": "space-between",
  "alignItems": "flex-end"
}
```

#### Bottom to Top, aligned Left

```js
<Col.BTL x>
  <Red />
  <Green />
  <Blue />
</Col.BTL>
```

<img src="images/col-bottom-top-left.png" width="320" />

```json
{
  "flexDirection": "column-reverse",
  "justifyContent": "space-between",
  "alignItems": "flex-start"
}
```

#### Bottom to Top

```js
<Col.BT x>
  <Red />
  <Green />
  <Blue />
<Col.BT>
```

<img src="images/col-bottom-top.png" width="320" />

```json
{
  "flexDirection": "column-reverse",
  "justifyContent": "space-between",
  "alignItems": "center"
}
```

#### Bottom to Top, aligned Right

```js
<Col.BTR x>
  <Red />
  <Green />
  <Blue />
</Col.BTR>
```

<img src="images/col-bottom-top-right.png" width="320" />

```json
{
  "flexDirection": "column-reverse",
  "justifyContent": "space-between",
  "alignItems": "flex-end"
}
```

### `Row`

```js
import { Row } from 'react-native-col';

function Demo() {
  return (
    <Row x>
      <Red />
      <Green />
      <Blue />
    </Row>
  );
}
```

#### Top Left

```js
<Row.TL x>
  <Red />
  <Green />
  <Blue />
</Row.TL>
```

<img src="images/row-top-left.png" width="320" />

```json
{
  "flexDirection": "row",
  "justifyContent": "flex-start",
  "alignItems": "flex-start"
}
```

#### Top

```js
<Row.T x>
  <Red />
  <Green />
  <Blue />
</Row.T>
```

<img src="images/row-top.png" width="320" />

```json
{
  "flexDirection": "row",
  "justifyContent": "center",
  "alignItems": "flex-start"
}
```

#### Top Right

```js
<Row.TR x>
  <Red />
  <Green />
  <Blue />
</Row.TR>
```

<img src="images/row-top-right.png" width="320" />

```json
{
  "flexDirection": "row",
  "justifyContent": "flex-end",
  "alignItems": "flex-start"
}
```

#### Left

```js
<Row.L x>
  <Red />
  <Green />
  <Blue />
</Row.L>
```

<img src="images/row-left.png" width="320" />

```json
{
  "flexDirection": "row",
  "justifyContent": "flex-start",
  "alignItems": "center"
}
```

#### Center

```js
<Row.C x>
  <Red />
  <Green />
  <Blue />
</Row.C>
```

<img src="images/row-center.png" width="320" />

```json
{
  "flexDirection": "row",
  "justifyContent": "center",
  "alignItems": "center"
}
```

#### Right

```js
<Row.R x>
  <Red />
  <Green />
  <Blue />
</Row.R>
```

<img src="images/row-right.png" width="320" />

```json
{
  "flexDirection": "row",
  "justifyContent": "flex-end",
  "alignItems": "center"
}
```

#### Bottom Left

```js
<Row.BL x>
  <Red />
  <Green />
  <Blue />
</Row.BL>
```

<img src="images/row-bottom-left.png" width="320" />

```json
{
  "flexDirection": "row",
  "justifyContent": "flex-start",
  "alignItems": "flex-end"
}
```

#### Bottom

```js
<Row.B x>
  <Red />
  <Green />
  <Blue />
</Row.B>
```

<img src="images/row-bottom.png" width="320" />

```json
{
  "flexDirection": "row",
  "justifyContent": "center",
  "alignItems": "flex-end"
}
```

#### Bottom Right

```js
<Row.BR x>
  <Red />
  <Green />
  <Blue />
</Row.BR>
```

<img src="images/row-bottom-right.png" width="320" />

```json
{
  "flexDirection": "row",
  "justifyContent": "flex-end",
  "alignItems": "flex-end"
}
```

#### Left to Right, aligned Top

```js
<Row.LRT x>
  <Red />
  <Green />
  <Blue />
</Row.LRT>
```

<img src="images/row-left-right-top.png" width="320" />

```json
{
  "flexDirection": "row",
  "justifyContent": "space-between",
  "alignItems": "flex-start"
}
```

#### Left to Right

```js
<Row.LR x>
  <Red />
  <Green />
  <Blue />
</Row.LR>
```

<img src="images/row-left-right.png" width="320" />

```json
{
  "flexDirection": "row",
  "justifyContent": "space-between",
  "alignItems": "center"
}
```

#### Left to Right, aligned Bottom

```js
<Row.LRB x>
  <Red />
  <Green />
  <Blue />
</Row.LRB>
```

<img src="images/row-left-right-bottom.png" width="320" />

```json
{
  "flexDirection": "row",
  "justifyContent": "space-between",
  "alignItems": "flex-end"
}
```

#### Right to Left, aligned Top

```js
<Row.RLT x>
  <Red />
  <Green />
  <Blue />
</Row.RLT>
```

<img src="images/row-right-left-top.png" width="320" />

```json
{
  "flexDirection": "row-reverse",
  "justifyContent": "space-between",
  "alignItems": "flex-start"
}
```

#### Right to Left

```js
<Row.RL x>
  <Red />
  <Green />
  <Blue />
</Row.RL>
```

<img src="images/row-right-left.png" width="320" />

```json
{
  "flexDirection": "row-reverse",
  "justifyContent": "space-between",
  "alignItems": "center"
}
```

#### Right to Left, aligned Bottom

```js
<Row.RLB x>
  <Red />
  <Green />
  <Blue />
</Row.RLB>
```

<img src="images/row-right-left-bottom.png" width="320" />

```json
{
  "flexDirection": "row-reverse",
  "justifyContent": "space-between",
  "alignItems": "flex-end"
}
```

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
