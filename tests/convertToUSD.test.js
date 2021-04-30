const { convertToUSD } = require('../converters/convertToUSD.js');

describe("TEST: convertToUSD()", () => {
    test("Smoke Test", () => {
        expect(1).toEqual(1);
    });
});

describe('Testing the convertToUSD() function', () => {
    it('Tests for valid inputs', () => {
        expect(Number(convertToUSD(100, 'RUB'))).toEqual(1.33);
        expect(Number(convertToUSD(100, 'EUR'))).toEqual(120.48);
        expect(Number(convertToUSD(100, 'GBP'))).toEqual(138.89);
    });
    it('Tests for invalid inputs', () => {
        expect(Number(convertToUSD('500', 'USD'))).toEqual(0);
        expect(Number(convertToUSD(500, 'GHJ'))).toEqual(0);
        expect(Number(convertToUSD(undefined, 'BNM'))).toEqual(0);
        expect(Number(convertToUSD())).toEqual(0);
    });
});