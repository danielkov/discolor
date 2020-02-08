process.env.TERM = 'unsupported';

// eslint-disable-next-line import/first
import { black, red, green, yellow, blue, magenta, cyan, white, gray } from '.';

describe(`unsupported terminal`, () => {
  it(`black in unsupported terminal`, () => {
    expect(black('test text')).toBe('test text');
  });

  it(`red in unsupported terminal`, () => {
    expect(red('test text')).toBe('test text');
  });

  it(`green in unsupported terminal`, () => {
    expect(green('test text')).toBe('test text');
  });

  it(`yellow in unsupported terminal`, () => {
    expect(yellow('test text')).toBe('test text');
  });

  it(`blue in unsupported terminal`, () => {
    expect(blue('test text')).toBe('test text');
  });

  it(`magenta in unsupported terminal`, () => {
    expect(magenta('test text')).toBe('test text');
  });

  it(`cyan in unsupported terminal`, () => {
    expect(cyan('test text')).toBe('test text');
  });

  it(`white in unsupported terminal`, () => {
    expect(white('test text')).toBe('test text');
  });

  it(`gray in unsupported terminal`, () => {
    expect(gray('test text')).toBe('test text');
  });
});
