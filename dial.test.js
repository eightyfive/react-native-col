import { getStyle } from './dial';

describe('Row', () => {
  test('Dial 1', () => {
    const style = getStyle('row', 1);

    expect(style).toHaveProperty('justifyContent', 'flex-start');
    expect(style).toHaveProperty('alignItems', 'flex-start');
  });

  test('Dial 2', () => {
    const style = getStyle('row', 2);

    expect(style).toHaveProperty('justifyContent', 'center');
    expect(style).toHaveProperty('alignItems', 'flex-start');
  });

  test('Dial 3', () => {
    const style = getStyle('row', 3);

    expect(style).toHaveProperty('justifyContent', 'flex-end');
    expect(style).toHaveProperty('alignItems', 'flex-start');
  });

  test('Dial 4', () => {
    const style = getStyle('row', 4);

    expect(style).toHaveProperty('justifyContent', 'flex-start');
    expect(style).toHaveProperty('alignItems', 'center');
  });

  test('Dial 5', () => {
    const style = getStyle('row', 5);

    expect(style).toHaveProperty('justifyContent', 'center');
    expect(style).toHaveProperty('alignItems', 'center');
  });

  test('Dial 6', () => {
    const style = getStyle('row', 6);

    expect(style).toHaveProperty('justifyContent', 'flex-end');
    expect(style).toHaveProperty('alignItems', 'center');
  });

  test('Dial 7', () => {
    const style = getStyle('row', 7);

    expect(style).toHaveProperty('justifyContent', 'flex-start');
    expect(style).toHaveProperty('alignItems', 'flex-end');
  });

  test('Dial 8', () => {
    const style = getStyle('row', 8);

    expect(style).toHaveProperty('justifyContent', 'center');
    expect(style).toHaveProperty('alignItems', 'flex-end');
  });

  test('Dial 9', () => {
    const style = getStyle('row', 9);

    expect(style).toHaveProperty('justifyContent', 'flex-end');
    expect(style).toHaveProperty('alignItems', 'flex-end');
  });
});

describe('Column', () => {
  test('Dial 1', () => {
    const style = getStyle('column', 1);

    expect(style).toHaveProperty('justifyContent', 'flex-start');
    expect(style).toHaveProperty('alignItems', 'flex-start');
  });

  test('Dial 2', () => {
    const style = getStyle('column', 2);

    expect(style).toHaveProperty('justifyContent', 'flex-start');
    expect(style).toHaveProperty('alignItems', 'center');
  });

  test('Dial 3', () => {
    const style = getStyle('column', 3);

    expect(style).toHaveProperty('justifyContent', 'flex-start');
    expect(style).toHaveProperty('alignItems', 'flex-end');
  });

  test('Dial 4', () => {
    const style = getStyle('column', 4);

    expect(style).toHaveProperty('justifyContent', 'center');
    expect(style).toHaveProperty('alignItems', 'flex-start');
  });

  test('Dial 5', () => {
    const style = getStyle('column', 5);

    expect(style).toHaveProperty('justifyContent', 'center');
    expect(style).toHaveProperty('alignItems', 'center');
  });

  test('Dial 6', () => {
    const style = getStyle('column', 6);

    expect(style).toHaveProperty('justifyContent', 'center');
    expect(style).toHaveProperty('alignItems', 'flex-end');
  });

  test('Dial 7', () => {
    const style = getStyle('column', 7);

    expect(style).toHaveProperty('justifyContent', 'flex-end');
    expect(style).toHaveProperty('alignItems', 'flex-start');
  });

  test('Dial 8', () => {
    const style = getStyle('column', 8);

    expect(style).toHaveProperty('justifyContent', 'flex-end');
    expect(style).toHaveProperty('alignItems', 'center');
  });

  test('Dial 9', () => {
    const style = getStyle('column', 9);

    expect(style).toHaveProperty('justifyContent', 'flex-end');
    expect(style).toHaveProperty('alignItems', 'flex-end');
  });
});
