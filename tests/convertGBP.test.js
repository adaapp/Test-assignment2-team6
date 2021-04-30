const { convertToGBP } = require('../converters/convertGBP')

describe("TEST: convertGBP()", () => {
    test("Smoke Test", () => {
        expect(1).toBe(1);
    });
});

describe('Testing the convertGBP function', () => {
    it('Tests for valid inputs', () => {
        expect(convertToGBP(100, 'EUR')).toBe('86.96')
        expect(convertToGBP(100, 'USD')).toBe('71.43')
        expect(convertToGBP(100, 'RUB')).toBe('0.96')
    })
})