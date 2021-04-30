const { convertToRUB } = require('../converters/convertToRUB')

describe('Testing the convertGBP function', () => {
    it('Tests for valid inputs', () => {
        expect(convertToRUB(100, 'EUR')).toBe('9090.91')
        expect(convertToRUB(100, 'USD')).toBe('7692.31')
        expect(convertToRUB(100, 'GBP')).toBe('10416.67')
    })
    it('Tests for invalid inputs', () => {
        expect(convertToRUB('500', 'EUR')).toBeFalsy()      
        expect(convertToRUB(500, 'GHJ')).toBeFalsy() 
        expect(convertToRUB(undefined, 'BNM')).toBeFalsy()
        expect(convertToRUB()).toBeFalsy()
    })
})