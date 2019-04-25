import dial from 'react-native-spacesheet/dial';

const { assign } = Object;

const styles = {
  Row: {
    flexDirection: 'row',
  },
  // space-between (Col)
  Col17: {
    ...dial('column', 1),
    justifyContent: 'space-between',
  },
  Col28: {
    ...dial('column', 2),
    justifyContent: 'space-between',
  },
  Col39: {
    ...dial('column', 3),
    justifyContent: 'space-between',
  },
  // space-between (Row)
  Row13: {
    ...dial('row', 1),
    justifyContent: 'space-between',
  },
  Row46: {
    ...dial('row', 4),
    justifyContent: 'space-between',
  },
  Row79: {
    ...dial('row', 7),
    justifyContent: 'space-between',
  },
};

for (let i = 1; i < 10; i++) {
  assign(styles, {
    [`Col${i}`]: dial('column', i),
    [`Row${i}`]: dial('row', i),
  });
}

export default styles;
