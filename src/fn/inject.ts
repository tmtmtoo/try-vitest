export const expr =
  <T>(f: (t: T) => T) =>
  (t: T) =>
    f(t);
