# react-native-col

Quick & concise [`react-native`](https://github.com/facebook/react-native) [Flexbox](https://facebook.github.io/react-native/docs/flexbox) positioning.

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
import { Row } from 'react-native-col';

// "Top Right"
<Row.TR />;
```

## Documentation

### `Col`

```js
import Col from 'react-native-col';

<Col />
<View />

// Top Left
<Col.TL />
<View style={{ flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start" }} />

// Top
<Col.T />
<View style={{ flexDirection: "column", justifyContent: "flex-start", alignItems: "center" }} />

// Top Right
<Col.TR />
<View style={{ flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-end" }} />

// Left
<Col.L />
<View style={{ flexDirection: "column", justifyContent: "center", alignItems: "flex-start" }} />

// Center
<Col.C />
<View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }} />

// Right
<Col.R />
<View style={{ flexDirection: "column", justifyContent: "center", alignItems: "flex-end" }} />

// Bottom Left
<Col.BL />
<View style={{ flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-start" }} />

// Bottom
<Col.B />
<View style={{ flexDirection: "column", justifyContent: "flex-end", alignItems: "center" }} />

// Bottom Right
<Col.BR />
<View style={{ flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-end" }} />

// Top to Bottom, aligned Left
<Col.TBL />
<View style={{ flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start" }} />

// Top to Bottom
<Col.TB />
<View style={{ flexDirection: "column", justifyContent: "space-between", alignItems: "center" }} />

// Top to Bottom, aligned Right
<Col.TBR />
<View style={{ flexDirection: "column", justifyContent: "space-between", alignItems: "flex-end" }} />

// Bottom to Top, aligned Left
<Col.BTL />
<View style={{ flexDirection: "column-reverse", justifyContent: "space-between", alignItems: "flex-start" }} />

// Bottom to Top
<Col.BT />
<View style={{ flexDirection: "column-reverse", justifyContent: "space-between", alignItems: "center" }} />

// Bottom to Top, aligned Right
<Col.BTR />
<View style={{ flexDirection: "column-reverse", justifyContent: "space-between", alignItems: "flex-end" }} />
```

### `Row`

```js
import { Row } from 'react-native-col';

<Row />
<View style={{ flexDirection: "row" }} />

// Top Left
<Row.TL />
<View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start" }} />

// Top
<Row.T />
<View style={{ flexDirection: "row", justifyContent: "center", alignItems: "flex-start" }} />

// Top Right
<Row.TR />
<View style={{ flexDirection: "row", justifyContent: "flex-end", alignItems: "flex-start" }} />

// Left
<Row.L />
<View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }} />

// Center
<Row.C />
<View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }} />

// Right
<Row.R />
<View style={{ flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }} />

// Bottom Left
<Row.BL />
<View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-end" }} />

// Bottom
<Row.B />
<View style={{ flexDirection: "row", justifyContent: "center", alignItems: "flex-end" }} />

// Bottom Right
<Row.BR />
<View style={{ flexDirection: "row", justifyContent: "flex-end", alignItems: "flex-end" }} />

// Left to Right, aligned Top
<Row.LRT />
<View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" }} />

// Left to Right
<Row.LR />
<View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} />

// Left to Right, aligned Bottom
<Row.LRB />
<View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" }} />

// Right to Left, aligned Top
<Row.RLT />
<View style={{ flexDirection: "row-reverse", justifyContent: "space-between", alignItems: "flex-start" }} />

// Right to Left
<Row.RL />
<View style={{ flexDirection: "row-reverse", justifyContent: "space-between", alignItems: "center" }} />

// Right to Left, aligned Bottom
<Row.RLB />
<View style={{ flexDirection: "row-reverse", justifyContent: "space-between", alignItems: "flex-end" }} />
```

## Credits

- [`react-native-row`](https://github.com/hyrwork/react-native-row) for the initial `dial` idea
