import { dialCol, dialRow } from './dial';

describe('Row', () => {
  test('Dial 1', () => {
    const style = dialRow(1);

    expect(style).toHaveProperty('justifyContent', 'flex-start');
    expect(style).toHaveProperty('alignItems', 'flex-start');
  });

  test('Dial 2', () => {
    const style = dialRow(2);

    expect(style).toHaveProperty('justifyContent', 'center');
    expect(style).toHaveProperty('alignItems', 'flex-start');
  });

  test('Dial 3', () => {
    const style = dialRow(3);

    expect(style).toHaveProperty('justifyContent', 'flex-end');
    expect(style).toHaveProperty('alignItems', 'flex-start');
  });

  test('Dial 4', () => {
    const style = dialRow(4);

    expect(style).toHaveProperty('justifyContent', 'flex-start');
    expect(style).toHaveProperty('alignItems', 'center');
  });

  test('Dial 5', () => {
    const style = dialRow(5);

    expect(style).toHaveProperty('justifyContent', 'center');
    expect(style).toHaveProperty('alignItems', 'center');
  });

  test('Dial 6', () => {
    const style = dialRow(6);

    expect(style).toHaveProperty('justifyContent', 'flex-end');
    expect(style).toHaveProperty('alignItems', 'center');
  });

  test('Dial 7', () => {
    const style = dialRow(7);

    expect(style).toHaveProperty('justifyContent', 'flex-start');
    expect(style).toHaveProperty('alignItems', 'flex-end');
  });

  test('Dial 8', () => {
    const style = dialRow(8);

    expect(style).toHaveProperty('justifyContent', 'center');
    expect(style).toHaveProperty('alignItems', 'flex-end');
  });

  test('Dial 9', () => {
    const style = dialRow(9);

    expect(style).toHaveProperty('justifyContent', 'flex-end');
    expect(style).toHaveProperty('alignItems', 'flex-end');
  });
});

describe('Column', () => {
  test('Dial 1', () => {
    const style = dialCol(1);

    expect(style).toHaveProperty('justifyContent', 'flex-start');
    expect(style).toHaveProperty('alignItems', 'flex-start');
  });

  test('Dial 2', () => {
    const style = dialCol(2);

    expect(style).toHaveProperty('justifyContent', 'flex-start');
    expect(style).toHaveProperty('alignItems', 'center');
  });

  test('Dial 3', () => {
    const style = dialCol(3);

    expect(style).toHaveProperty('justifyContent', 'flex-start');
    expect(style).toHaveProperty('alignItems', 'flex-end');
  });

  test('Dial 4', () => {
    const style = dialCol(4);

    expect(style).toHaveProperty('justifyContent', 'center');
    expect(style).toHaveProperty('alignItems', 'flex-start');
  });

  test('Dial 5', () => {
    const style = dialCol(5);

    expect(style).toHaveProperty('justifyContent', 'center');
    expect(style).toHaveProperty('alignItems', 'center');
  });

  test('Dial 6', () => {
    const style = dialCol(6);

    expect(style).toHaveProperty('justifyContent', 'center');
    expect(style).toHaveProperty('alignItems', 'flex-end');
  });

  test('Dial 7', () => {
    const style = dialCol(7);

    expect(style).toHaveProperty('justifyContent', 'flex-end');
    expect(style).toHaveProperty('alignItems', 'flex-start');
  });

  test('Dial 8', () => {
    const style = dialCol(8);

    expect(style).toHaveProperty('justifyContent', 'flex-end');
    expect(style).toHaveProperty('alignItems', 'center');
  });

  test('Dial 9', () => {
    const style = dialCol(9);

    expect(style).toHaveProperty('justifyContent', 'flex-end');
    expect(style).toHaveProperty('alignItems', 'flex-end');
  });
});
