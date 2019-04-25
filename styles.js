import dial from 'react-native-spacesheet/dial';

const { assign } = Object;

const styles = {
  Col: dial('column', 1),
  Row: dial('row', 1),
  // space-between (Col)
  Col17: {
    ...dial('column', 1),
    flex: 1,
    justifyContent: 'space-between',
  },
  Col28: {
    ...dial('column', 2),
    flex: 1,
    justifyContent: 'space-between',
  },
  Col39: {
    ...dial('column', 3),
    flex: 1,
    justifyContent: 'space-between',
  },
  // space-between (Row)
  Row13: {
    ...dial('row', 1),
    flex: 1,
    justifyContent: 'space-between',
  },
  Row46: {
    ...dial('row', 4),
    flex: 1,
    justifyContent: 'space-between',
  },
  Row79: {
    ...dial('row', 7),
    flex: 1,
    justifyContent: 'space-between',
  },
};

for (let i = 1; i < 10; i++) {
  const col = dial('column', i);
  const row = dial('row', i);

  assign(styles, {
    [`Col${i}`]: { ...col, flex: 1 },
    [`Row${i}`]: { ...row, flex: 1 },
  });
}

export default styles;
