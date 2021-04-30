const { convertToRUB } = require('../converters/convertToRUB.js');

describe("TEST: convertToRUB()", () => {
    test("Smoke Test", () => {
        expect(1).toEqual(1);
    });
});

describe('Testing the convertToRUB() function', () => {
    it('Tests for valid inputs', () => {
        expect(Number(convertToRUB(100, 'EUR'))).toEqual(9090.91);
        expect(Number(convertToRUB(100, 'USD'))).toEqual(7692.31);
        expect(Number(convertToRUB(100, 'GBP'))).toEqual(10416.67);
    });
    it('Tests for invalid inputs', () => {
        expect(Number(convertToRUB('500', 'RUB'))).toEqual(0);      
        expect(Number(convertToRUB(500, 'GHJ'))).toEqual(0);
        expect(Number(convertToRUB(undefined, 'BNM'))).toEqual(0);
        expect(Number(convertToRUB())).toEqual(0);
    });
});