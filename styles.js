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

export const Row = {
  Row: {
    flexDirection: 'row',
  },
  LRT: {
    ...dial('row', 1),
    justifyContent: 'space-between',
  },
  LR: {
    ...dial('row', 4),
    justifyContent: 'space-between',
  },
  LRB: {
    ...dial('row', 7),
    justifyContent: 'space-between',
  },
  RLT: {
    ...dial('row', 1),
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  RL: {
    ...dial('row', 4),
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  RLB: {
    ...dial('row', 7),
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
};

o.entries(dials).forEach(([side, dial]) => {
  o.assign(Row, { [side]: dial('row', dial) });
});

export const Col = {
  TBL: {
    ...dial('column', 1),
    justifyContent: 'space-between',
  },
  TB: {
    ...dial('column', 2),
    justifyContent: 'space-between',
  },
  TBR: {
    ...dial('column', 3),
    justifyContent: 'space-between',
  },
  BTL: {
    ...dial('column', 1),
    flexDirection: 'column-reverse',
    justifyContent: 'space-between',
  },
  BT: {
    ...dial('column', 2),
    flexDirection: 'column-reverse',
    justifyContent: 'space-between',
  },
  BTR: {
    ...dial('column', 3),
    flexDirection: 'column-reverse',
    justifyContent: 'space-between',
  },
};

o.entries(dials).forEach(([side, dial]) => {
  o.assign(Col, { [side]: dial('column', dial) });
});

export default { Col, Row };
