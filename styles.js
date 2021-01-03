import dial from './dial';

const o = Object;

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

const Col = {};

// TL --> BR
o.entries(dials).forEach(([side, dial]) => {
  o.assign(Col, { [side]: dial('column', dial) });
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

const Row = {};

o.entries(dials).forEach(([side, dial]) => {
  o.assign(Row, { [side]: dial('row', dial) });
});

Row.Row = {
  flexDirection: 'row',
};

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

export default { Col, Row };
