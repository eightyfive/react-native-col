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

function makeCols(style = {}) {
  const bag = {};

  // TL --> BR
  o.entries(dials).forEach(([position, num]) => {
    bag[position] = dial('column', num);
  });

  bag.TBL = {
    ...style,
    ...dial('column', 1),
    justifyContent: 'space-between',
  };

  bag.TB = {
    ...style,
    ...dial('column', 2),
    justifyContent: 'space-between',
  };

  bag.TBR = {
    ...style,
    ...dial('column', 3),
    justifyContent: 'space-between',
  };

  bag.BTL = {
    ...style,
    ...dial('column', 1),
    flexDirection: 'column-reverse',
    justifyContent: 'space-between',
  };

  bag.BT = {
    ...style,
    ...dial('column', 2),
    flexDirection: 'column-reverse',
    justifyContent: 'space-between',
  };

  bag.BTR = {
    ...style,
    ...dial('column', 3),
    flexDirection: 'column-reverse',
    justifyContent: 'space-between',
  };

  return bag;
}

function makeRows(style = {}) {
  const bag = {};

  // TL --> BR
  o.entries(dials).forEach(([position, num]) => {
    bag[position] = dial('row', num);
  });

  bag.LRT = {
    ...style,
    ...dial('row', 1),
    justifyContent: 'space-between',
  };

  bag.LR = {
    ...style,
    ...dial('row', 4),
    justifyContent: 'space-between',
  };

  bag.LRB = {
    ...style,
    ...dial('row', 7),
    justifyContent: 'space-between',
  };

  bag.RLT = {
    ...style,
    ...dial('row', 1),
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  };

  bag.RL = {
    ...style,
    ...dial('row', 4),
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  };

  bag.RLB = {
    ...style,
    ...dial('row', 7),
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  };

  return bag;
}

const Col = makeCols();
const ColX = makeCols({ flex: 1 });

const Row = makeRows();
const RowX = makeRows({ flex: 1 });

export default { Col, ColX, Row, RowX };
