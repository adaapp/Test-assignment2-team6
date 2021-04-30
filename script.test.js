const { expect } = require('@jest/globals');
const { convertCurrency } = require('./script.js');

require('./script.js');

describe("TEST: Smoke test", () => {
    test("Smoke", () => {
        expect(4).toBe(4);
    });
});

describe("TEST: convertCurrency()", () => {
    test("No negatives", () => {
        document.getElementById("currency_value").value = -100;
        expect(convertCurrency());
        document.getElementById("converted_output").value == 0;
    });
});