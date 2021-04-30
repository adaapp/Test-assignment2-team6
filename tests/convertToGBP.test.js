describe("TEST: convertToGBP()", () => {
    test("Smoke Test", () => {
        expect(1).toBe(1);
    });
});

describe('Testing the convertToGBP() function', () => {
    it('Tests for valid inputs', () => {
        expect(convertToGBP(100, 'EUR')).toBe('86.96')
        expect(convertToGBP(100, 'USD')).toBe('71.43')
        expect(convertToGBP(100, 'RUB')).toBe('0.96')
    })
    it('Tests for invalid inputs', () => {
        expect(convertToGBP('500', 'EUR')).toBeFalsy()      
        expect(convertToGBP(500, 'GHJ')).toBeFalsy() 
        expect(convertToGBP(undefined, 'BNM')).toBeFalsy()
    })
})