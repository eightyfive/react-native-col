import dial from './dial';

const dials = {
  TL: 1,
  T: 2,
  TR: 3,
  L: 4,
  C: 5,
  R: 6,
  BL: 7,
  B: 8,
  BR: 9,
};

// Col
const Col = {};

// TL --> BR
Object.entries(dials).forEach(([position, num]) => {
  Col[position] = dial('column', num);
});

Col.TBL = {
  ...dial('column', 1),
  justifyContent: 'space-between',
};

Col.TB = {
  ...dial('column', 2),
  justifyContent: 'space-between',
};

Col.TBR = {
  ...dial('column', 3),
  justifyContent: 'space-between',
};

Col.BTL = {
  ...dial('column', 1),
  flexDirection: 'column-reverse',
  justifyContent: 'space-between',
};

Col.BT = {
  ...dial('column', 2),
  flexDirection: 'column-reverse',
  justifyContent: 'space-between',
};

Col.BTR = {
  ...dial('column', 3),
  flexDirection: 'column-reverse',
  justifyContent: 'space-between',
};

Col.LRT = {
  ...dial('column', 2),
  alignItems: 'stretch',
};

Col.LRC = {
  ...dial('column', 5),
  alignItems: 'stretch',
};

Col.LRB = {
  ...dial('column', 8),
  alignItems: 'stretch',
};

// Row
const Row = {};

// TL --> BR
Object.entries(dials).forEach(([position, num]) => {
  Row[position] = dial('row', num);
});

Row.LRT = {
  ...dial('row', 1),
  justifyContent: 'space-between',
};

Row.LR = {
  ...dial('row', 4),
  justifyContent: 'space-between',
};

Row.LRB = {
  ...dial('row', 7),
  justifyContent: 'space-between',
};

Row.RLT = {
  ...dial('row', 1),
  flexDirection: 'row-reverse',
  justifyContent: 'space-between',
};

Row.RL = {
  ...dial('row', 4),
  flexDirection: 'row-reverse',
  justifyContent: 'space-between',
};

Row.RLB = {
  ...dial('row', 7),
  flexDirection: 'row-reverse',
  justifyContent: 'space-between',
};

Row.TBL = {
  ...dial('row', 4),
  alignItems: 'stretch',
};

Row.TBC = {
  ...dial('row', 5),
  alignItems: 'stretch',
};

Row.TBR = {
  ...dial('row', 6),
  alignItems: 'stretch',
};

export default { Col, Row };
