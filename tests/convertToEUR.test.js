const { convertToEUR } = require('../converters/convertToEUR.js');

describe("TEST: convertToEUR()", () => {
    test("Smoke Test", () => {
        expect(1).toEqual(1);
    });
});

describe('Testing the convertToEUR() function', () => {
    it('Tests for valid inputs', () => {
        expect(Number(convertToEUR(100, 'RUB'))).toEqual(1.10);
        expect(Number(convertToEUR(100, 'USD'))).toEqual(82.64);
        expect(Number(convertToEUR(100, 'GBP'))).toEqual(114.94);
    });
    it('Tests for invalid inputs', () => {
        expect(Number(convertToEUR('500', 'EUR'))).toEqual(0);
        expect(Number(convertToEUR(500, 'GHJ'))).toEqual(0);
        expect(Number(convertToEUR(undefined, 'BNM'))).toEqual(0);
        expect(Number(convertToEUR())).toEqual(0);
    });
});