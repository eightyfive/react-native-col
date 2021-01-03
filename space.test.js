import partition from './space';

const sizes = [0, 4, 8, 16, 32, 64];

describe('Space', () => {
  test('mb', () => {
    const [view, styles] = partition({ style: 'foo', mb: 1 }, sizes);

    expect(view).toHaveProperty('style', 'foo');
    expect(view).not.toHaveProperty('mb');

    expect(styles.length).toBe(1);
    expect(styles[0]).toHaveProperty('marginBottom', 4);
  });
});
