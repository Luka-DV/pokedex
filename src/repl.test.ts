
import { cleanInput } from "./repl";
import { describe, expect, test } from "vitest";

describe.each([
    {
        input: " hello world ",
        expected: ["hello", "world"]
    },
    {
        input: " one two three ",
        expected: ["one", "two", "three"]
    },
    {
        input: " four five six seven ",
        expected: ["four", "five", "six", "seven"]
    }
 
])("cleanInput($input)", ({input, expected}) => {
    test(`Expected: ${expected}`, () => {
        // TODO: call cleanInput with the input here
        const actual = cleanInput(input);

        // The `expect` and `toHaveLength` functions are from vitest
        // they will fail the test if the condition is not met
        expect(actual).toHaveLength(expected.length);
        for(const i in expected) {
            expect(actual[i]).toBe(expected[i]);
        }
    });
});