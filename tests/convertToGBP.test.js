const { convertToGBP } = require('../converters/convertToGBP.js');

describe("TEST: convertToGBP()", () => {
    test("Smoke Test", () => {
        expect(1).toEqual(1);
    });
});

describe('Testing the convertToGBP() function', () => {
    it('Tests for valid inputs', () => {
        expect(Number(convertToGBP(100, 'EUR'))).toEqual(86.96);
        expect(Number(convertToGBP(100, 'USD'))).toEqual(71.43);
        expect(Number(convertToGBP(100, 'RUB'))).toEqual(0.96);
    });
    it('Tests for invalid inputs', () => {
        expect(Number(convertToGBP('500', 'GBP'))).toEqual(0);      
        expect(Number(convertToGBP(500, 'GHJ'))).toEqual(0);
        expect(Number(convertToGBP(undefined, 'BNM'))).toEqual(0);
        expect(Number(convertToGBP())).toEqual(0);
    });
});