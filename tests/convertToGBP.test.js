const gbp = require('../converters/convertToGBP.js');
const rub = require('../converters/convertToRUB.js');
const controller = require('../converters/convertController.js');

describe("TEST: convertToGBP()", () => {
    test("Smoke Test", () => {
        expect(1).toBe(1);
    });
});

describe('Testing the convertToGBP() function', () => {
    it('Tests for valid inputs', () => {
        expect(gbp.convertToGBP(100, 'EUR')).toBe('86.96');
        expect(gbp.convertToGBP(100, 'USD')).toBe('71.43');
        expect(gbp.convertToGBP(100, 'RUB')).toBe('0.96');
    })
    it('Tests for invalid inputs', () => {
        expect(gbp.convertToGBP('500', 'EUR')).toEqual(0);      
        expect(gbp.convertToGBP(500, 'GHJ')).toEqual(0);
        expect(gbp.convertToGBP(undefined, 'BNM')).toEqual(0);
    })
})