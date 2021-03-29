import dial from './dial';

describe('Row', () => {
  test('Dial 1', () => {
    const style = dial('row', 1);

    expect(style).toHaveProperty('justifyContent', 'flex-start');
    expect(style).toHaveProperty('alignItems', 'flex-start');
  });

  test('Dial 2', () => {
    const style = dial('row', 2);

    expect(style).toHaveProperty('justifyContent', 'center');
    expect(style).toHaveProperty('alignItems', 'flex-start');
  });

  test('Dial 3', () => {
    const style = dial('row', 3);

    expect(style).toHaveProperty('justifyContent', 'flex-end');
    expect(style).toHaveProperty('alignItems', 'flex-start');
  });

  test('Dial 4', () => {
    const style = dial('row', 4);

    expect(style).toHaveProperty('justifyContent', 'flex-start');
    expect(style).toHaveProperty('alignItems', 'center');
  });

  test('Dial 5', () => {
    const style = dial('row', 5);

    expect(style).toHaveProperty('justifyContent', 'center');
    expect(style).toHaveProperty('alignItems', 'center');
  });

  test('Dial 6', () => {
    const style = dial('row', 6);

    expect(style).toHaveProperty('justifyContent', 'flex-end');
    expect(style).toHaveProperty('alignItems', 'center');
  });

  test('Dial 7', () => {
    const style = dial('row', 7);

    expect(style).toHaveProperty('justifyContent', 'flex-start');
    expect(style).toHaveProperty('alignItems', 'flex-end');
  });

  test('Dial 8', () => {
    const style = dial('row', 8);

    expect(style).toHaveProperty('justifyContent', 'center');
    expect(style).toHaveProperty('alignItems', 'flex-end');
  });

  test('Dial 9', () => {
    const style = dial('row', 9);

    expect(style).toHaveProperty('justifyContent', 'flex-end');
    expect(style).toHaveProperty('alignItems', 'flex-end');
  });
});

describe('Column', () => {
  test('Dial 1', () => {
    const style = dial('column', 1);

    expect(style).toHaveProperty('justifyContent', 'flex-start');
    expect(style).toHaveProperty('alignItems', 'flex-start');
  });

  test('Dial 2', () => {
    const style = dial('column', 2);

    expect(style).toHaveProperty('justifyContent', 'flex-start');
    expect(style).toHaveProperty('alignItems', 'center');
  });

  test('Dial 3', () => {
    const style = dial('column', 3);

    expect(style).toHaveProperty('justifyContent', 'flex-start');
    expect(style).toHaveProperty('alignItems', 'flex-end');
  });

  test('Dial 4', () => {
    const style = dial('column', 4);

    expect(style).toHaveProperty('justifyContent', 'center');
    expect(style).toHaveProperty('alignItems', 'flex-start');
  });

  test('Dial 5', () => {
    const style = dial('column', 5);

    expect(style).toHaveProperty('justifyContent', 'center');
    expect(style).toHaveProperty('alignItems', 'center');
  });

  test('Dial 6', () => {
    const style = dial('column', 6);

    expect(style).toHaveProperty('justifyContent', 'center');
    expect(style).toHaveProperty('alignItems', 'flex-end');
  });

  test('Dial 7', () => {
    const style = dial('column', 7);

    expect(style).toHaveProperty('justifyContent', 'flex-end');
    expect(style).toHaveProperty('alignItems', 'flex-start');
  });

  test('Dial 8', () => {
    const style = dial('column', 8);

    expect(style).toHaveProperty('justifyContent', 'flex-end');
    expect(style).toHaveProperty('alignItems', 'center');
  });

  test('Dial 9', () => {
    const style = dial('column', 9);

    expect(style).toHaveProperty('justifyContent', 'flex-end');
    expect(style).toHaveProperty('alignItems', 'flex-end');
  });
});
