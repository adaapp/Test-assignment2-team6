const { convertToEUR } = require('../converters/convertToEUR.js');

describe("TEST: convertToEUR()", () => {
    test("Smoke Test", () => {
        expect(1).toEqual(1);
    });
});

describe('Testing the convertToEUR() function', () => {
    it('Tests for valid inputs', () => {
        expect(convertToEUR(100, 'RUB')).toEqual(1.10);
        expect(convertToEUR(100, 'USD')).toEqual(82.64);
        expect(convertToEUR(100, 'GBP')).toEqual(114.94);
    });
    it('Tests for invalid inputs', () => {
        expect(convertToEUR('500', 'EUR')).toEqual(0);
        expect(convertToEUR(500, 'GHJ')).toEqual(0);
        expect(convertToEUR(undefined, 'BNM')).toEqual(0);
        expect(convertToEUR()).toEqual(0);
    });
});