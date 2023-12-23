import { expect, test, vi } from "vitest";
import { expr } from "./inject";

test("inject mock function", () => {
  const f = vi.fn((n: number) => n * 2);

  const twice = expr(f);
  const actual = twice(3);
  const expected = 6;

  expect(actual).toStrictEqual(expected);
});
