import { expect, test, vi } from "vitest";
import { nowIsoDateString } from "./function";
import * as inner from "./innerFunction";

test("mock inner function", () => {
  vi.spyOn(inner, "now").mockReturnValueOnce(new Date("05 October 2011 14:48 UTC"));

  const actual = nowIsoDateString();

  const expected = "2011-10-05T14:48:00.000Z";
  expect(actual).toStrictEqual(expected);
});
