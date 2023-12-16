import { test, expect } from "vitest"
import { pow } from "."

test("simple testing", () => {
    const actual = pow(2);
    const expected = 4
    expect(actual).toStrictEqual(expected)
})
