import { test, expect } from "vitest"
import { pow } from "./simple"

test("use pow", () => {
    const actual = pow(2);
    const expected = 4
    expect(actual).toStrictEqual(expected)
})
