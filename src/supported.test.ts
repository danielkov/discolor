import './supported';
import { black, red, green, yellow, blue, magenta, cyan, white, gray } from '.';

describe(`supported terminal`, () => {
  beforeEach(() => {
    process.env.TERM = 'cygwin';
  });

  it(`black in supported terminal`, () => {
    expect(black('test text')).toBe(`\u001b[30mtest text\u001b[39m`);
  });

  it(`red in supported terminal`, () => {
    expect(red('test text')).toBe(`\u001b[31mtest text\u001b[39m`);
  });

  it(`green in supported terminal`, () => {
    expect(green('test text')).toBe(`\u001b[32mtest text\u001b[39m`);
  });

  it(`yellow in supported terminal`, () => {
    expect(yellow('test text')).toBe(`\u001b[33mtest text\u001b[39m`);
  });

  it(`blue in supported terminal`, () => {
    expect(blue('test text')).toBe(`\u001b[34mtest text\u001b[39m`);
  });

  it(`magenta in supported terminal`, () => {
    expect(magenta('test text')).toBe(`\u001b[35mtest text\u001b[39m`);
  });

  it(`cyan in supported terminal`, () => {
    expect(cyan('test text')).toBe(`\u001b[36mtest text\u001b[39m`);
  });

  it(`white in supported terminal`, () => {
    expect(white('test text')).toBe(`\u001b[37mtest text\u001b[39m`);
  });

  it(`gray in supported terminal`, () => {
    expect(gray('test text')).toBe(`\u001b[90mtest text\u001b[39m`);
  });
});
