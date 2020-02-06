const supported = /color|ansi|cygwin|linux/i.test(process.env.TERM);

export const black = (text: string): string => {
  return supported ? `\u001b[30m${text}\u001b[39m` : text;
};
export const red = (text: string): string => {
  return supported ? `\u001b[31m${text}\u001b[39m` : text;
};
export const green = (text: string): string => {
  return supported ? `\u001b[32m${text}\u001b[39m` : text;
};
export const yellow = (text: string): string => {
  return supported ? `\u001b[33m${text}\u001b[39m` : text;
};
export const blue = (text: string): string => {
  return supported ? `\u001b[34m${text}\u001b[39m` : text;
};
export const magenta = (text: string): string => {
  return supported ? `\u001b[35m${text}\u001b[39m` : text;
};
export const cyan = (text: string): string => {
  return supported ? `\u001b[36m${text}\u001b[39m` : text;
};
export const white = (text: string): string => {
  return supported ? `\u001b[37m${text}\u001b[39m` : text;
};
export const gray = (text: string): string => {
  return supported ? `\u001b[90m${text}\u001b[39m` : text;
};
