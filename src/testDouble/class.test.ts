import { expect, test, vi } from "vitest";
import { MyDateString } from "./class";
import { MyDate } from "./innerClass";

test("mock inner class method", () => {
  vi.spyOn(MyDate.prototype, "now").mockReturnValue(
    new Date("05 October 2011 14:48 UTC"),
  );

  const myDateString = new MyDateString();
  const actual = myDateString.nowAsIso8601();

  const expected = "2011-10-05T14:48:00.000Z";
  expect(actual).toStrictEqual(expected);
});
