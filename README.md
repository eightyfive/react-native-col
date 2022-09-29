# `react-native-col`

Flexbox made easy & semantic

```
┌─────────────┐
│ TL   T   TR │
│             │
│ L    C    R │
│             │
│ BL   B   BR │
└─────────────┘
```

- [Install](#install)
- [Usage](#usage)
- [API](#api)
  - [`Col`](#col)
  - [`Row`](#row)
  - [`Col0`, `Col1`, `Row7`... (Flex)](#col0-col1-row7-flex)
  - [`create(Col|Row)`](#createcolrow)
  - [`createDialStyle`](#createdialstyle)
  - [`(col|row|flex)Styles`](#colrowflexstyles)
- [Credits](#credits)

## Install

```
yarn add react-native-col
```

## Usage

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

## API

All demos use these 3 RGB squares:

```js
import { View } from 'react-native';

const square = {
  minWidth: 50,
  minHeight: 50,
};

const $ = {
  // Red
  r: {
    ...square,
    backgroundColor: 'red',
  },
  // Green
  g: {
    ...square,
    backgroundColor: 'green',
  },
  // Blue
  b: {
    ...square,
    backgroundColor: 'blue',
  },
};

const Red = () => <View style={$.r} />;

const Green = () => <View style={$.g} />;

const Blue = () => <View style={$.b} />;
```

Also assume that all `Col` and `Row` containers in demos, are `{ flex: 1 }`. Which are redacted for clarity.

### `Col`

```js
import { Col } from 'react-native-col';
```

#### Top Left

```jsx
// Equivalent to <Col />
<Col.TL>
  <Red />
  <Green />
  <Blue />
</Col.TL>
```

<img src="images/col-top-left.png" width="250" />

#### Top

```jsx
<Col.T>
  <Red />
  <Green />
  <Blue />
</Col.T>
```

<img src="images/col-top.png" width="250" />

#### Top Right

```jsx
<Col.TR>
  <Red />
  <Green />
  <Blue />
</Col.TR>
```

<img src="images/col-top-right.png" width="250" />

#### Left

```jsx
<Col.L>
  <Red />
  <Green />
  <Blue />
</Col.L>
```

<img src="images/col-left.png" width="250" />

#### Center

```jsx
<Col.C>
  <Red />
  <Green />
  <Blue />
</Col.C>
```

<img src="images/col-center.png" width="250" />

#### Right

```jsx
<Col.R>
  <Red />
  <Green />
  <Blue />
</Col.R>
```

<img src="images/col-right.png" width="250" />

#### Bottom Left

```js
<Col.BL>
  <Red />
  <Green />
  <Blue />
</Col.BL>
```

<img src="images/col-bottom-left.png" width="250" />

#### Bottom

```jsx
<Col.B>
  <Red />
  <Green />
  <Blue />
</Col.B>
```

<img src="images/col-bottom.png" width="250" />

#### Bottom Right

```jsx
<Col.BR>
  <Red />
  <Green />
  <Blue />
</Col.BR>
```

<img src="images/col-bottom-right.png" width="250" />

#### Top to Bottom, aligned Left

```js
<Col.TBL>
  <Red />
  <Green />
  <Blue />
</Col.TBL>
```

<img src="images/col-top-bottom-left.png" width="250" />

#### Top to Bottom

```jsx
<Col.TB>
  <Red />
  <Green />
  <Blue />
</Col.TB>
```

<img src="images/col-top-bottom.png" width="250" />

#### Top to Bottom, aligned Right

```jsx
<Col.TBR>
  <Red />
  <Green />
  <Blue />
</Col.TBR>
```

<img src="images/col-top-bottom-right.png" width="250" />

#### Bottom to Top, aligned Left

```js
<Col.BTL>
  <Red />
  <Green />
  <Blue />
</Col.BTL>
```

<img src="images/col-bottom-top-left.png" width="250" />

#### Bottom to Top

```jsx
<Col.BT>
  <Red />
  <Green />
  <Blue />
</Col.BT>
```

<img src="images/col-bottom-top.png" width="250" />

#### Bottom to Top, aligned Right

```jsx
<Col.BTR>
  <Red />
  <Green />
  <Blue />
</Col.BTR>
```

<img src="images/col-bottom-top-right.png" width="250" />

#### Top, aligned Left to Right

```jsx
<Col.LRT>
  <Red />
  <Green />
  <Blue />
</Col.LRT>
```

<img src="images/col-left-right-top.png" width="250" />

#### Center, aligned Left to Right

```jsx
<Col.LRC>
  <Red />
  <Green />
  <Blue />
</Col.LRC>
```

<img src="images/col-left-right-center.png" width="250" />

#### Bottom, aligned Left to Right

```jsx
<Col.LRB>
  <Red />
  <Green />
  <Blue />
</Col.LRB>
```

<img src="images/col-left-right-bottom.png" width="250" />

### `Row`

```js
import { Row } from 'react-native-col';
```

#### Top Left

```js
// Equivalent to <Row />
<Row.TL>
  <Red />
  <Green />
  <Blue />
</Row.TL>
```

<img src="images/row-top-left.png" width="250" />

#### Top

```jsx
<Row.T>
  <Red />
  <Green />
  <Blue />
</Row.T>
```

<img src="images/row-top.png" width="250" />

#### Top Right

```jsx
<Row.TR>
  <Red />
  <Green />
  <Blue />
</Row.TR>
```

<img src="images/row-top-right.png" width="250" />

#### Left

```js
<Row.L>
  <Red />
  <Green />
  <Blue />
</Row.L>
```

<img src="images/row-left.png" width="250" />

#### Center

```jsx
<Row.C>
  <Red />
  <Green />
  <Blue />
</Row.C>
```

<img src="images/row-center.png" width="250" />

#### Rigth

```jsx
<Row.R>
  <Red />
  <Green />
  <Blue />
</Row.R>
```

<img src="images/row-right.png" width="250" />

#### Bottom Left

```js
<Row.BL>
  <Red />
  <Green />
  <Blue />
</Row.BL>
```

<img src="images/row-bottom-left.png" width="250" />

#### Bottom

```jsx
<Row.B>
  <Red />
  <Green />
  <Blue />
</Row.B>
```

<img src="images/row-bottom.png" width="250" />

#### Bottom Right

```jsx
<Row.BR>
  <Red />
  <Green />
  <Blue />
</Row.BR>
```

<img src="images/row-bottom-right.png" width="250" />

#### Left to Right, aligned Top

```js
<Row.LRT>
  <Red />
  <Green />
  <Blue />
</Row.LRT>
```

<img src="images/row-left-right-top.png" width="250" />

#### Left to Right

```jsx
<Row.LR>
  <Red />
  <Green />
  <Blue />
</Row.LR>
```

<img src="images/row-left-right.png" width="250" />

#### Left to Right, aligned Bottom

```jsx
<Row.LRB>
  <Red />
  <Green />
  <Blue />
</Row.LRB>
```

<img src="images/row-left-right-bottom.png" width="250" />

#### Right to Left, aligned Top

```js
<Row.RLT>
  <Red />
  <Green />
  <Blue />
</Row.RLT>
```

<img src="images/row-right-left-top.png" width="250" />

#### Right to Left

```jsx
<Row.RL>
  <Red />
  <Green />
  <Blue />
</Row.RL>
```

<img src="images/row-right-left.png" width="250" />

#### Right to Left, aligned Bottom

```jsx
<Row.RLB>
  <Red />
  <Green />
  <Blue />
</Row.RLB>
```

<img src="images/row-right-left-bottom.png" width="250" />

#### Left, aligned Top to Bottom

```js
<Row.TBL>
  <Red />
  <Green />
  <Blue />
</Row.TBL>
```

<img src="images/row-top-bottom-left.png" width="250" />

#### Center, aligned Top to Bottom

```jsx
<Row.TBC>
  <Red />
  <Green />
  <Blue />
</Row.TBC>
```

<img src="images/row-top-bottom-center.png" width="250" />

#### Right, aligned Top to Bottom

```jsx
<Row.TBR>
  <Red />
  <Green />
  <Blue />
</Row.TBR>
```

<img src="images/row-top-bottom-right.png" width="250" />

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

You can also use the positioning shortcuts on them:

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

### `create(Col|Row)`

```ts
createCol<T extends ViewProps>(BaseComponent: ComponentType<any>)
```

```ts
createRow<T extends ViewProps>(BaseComponent: ComponentType<any>)
```

Utility functions to generate all positioning shortcuts based on your `BaseComponent` of choice.

Works great with [`react-native-themesheet`](https://github.com/eightyfive/react-native-themesheet) for example:

```ts
import { createTheme } from 'react-native-themesheet';

// src/view/theme.ts
export const { createBox } = createTheme(
  { primary: '#ff00dd' },
  { s: 4, m: 8, l: 16, xl: 32 }
);

// src/views/lib.ts
import { View } from 'react-native';
import { createCol } from 'react-native-col';

import { createBox } from './theme';

const Box = createBox(View);

export const Col = createCol(Box);

export const Row = createRow(Box);

// src/views/home.tsx
import { Col, Row } from './lib';

export function Home() {
  return (
    <Col.C py="xl" mb="l">
      {/* ... */}
    </Col.C>
    <Row.LR p="m" mb="m">{/* ... */}</Row.LR>
  );
}
```

### `createDialStyle`

```ts
type Dial = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

createDialStyle(flexDirection: 'row' | 'column', dial: Dial): ViewStyle
```

Utility function to generate Flex "dial" positioning _raw_ styles.

Think of your Flexbox container as a dial number pad:

```
┌─────────────┐
│ 1    2    3 │
│             │
│ 4    5    6 │
│             │
│ 7    8    9 │
└─────────────┘
```

You can then align container items according to the "dial" number:

```ts
import { createDialStyle as dial } from 'react-native-col';

dial('column', 3); // --> col direction, justified right (flex-end), aligned Top

dial('row', 8); // --> row direction, justified center, aligned bottom

// Etc
```

### `(col|row|flex)Styles`

All react-native `StyleSheet` styles used by the library are re-exported:

```js
import { colStyles, rowStyles, flexStyles } from 'react-native-col';

colStyles.col;
colStyles.TR;
colStyles.T;
// Etc...

rowStyles.row;
rowStyles.B;
rowStyles.BR;
// Etc...

flexStyles.f0;
flexStyles.f1;
flexStyles.f2;
// Etc...
```

## Credits

- [`react-native-row`](https://github.com/hyrwork/react-native-row) for the initial `dial` idea
