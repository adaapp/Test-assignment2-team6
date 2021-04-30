const { convertToEUR } = require('../converters/convertToEUR')

describe('Testing the convertGBP function', () => {
    it('Tests for valid inputs', () => {
        expect(convertToEUR(100, 'RUB')).toBe('1.10')
        expect(convertToEUR(100, 'USD')).toBe('82.64')
        expect(convertToEUR(100, 'GBP')).toBe('114.94')
    })
    it('Tests for invalid inputs', () => {
        expect(convertToEUR('500', 'EUR')).toBeFalsy()      
        expect(convertToEUR(500, 'GHJ')).toBeFalsy() 
        expect(convertToEUR(undefined, 'BNM')).toBeFalsy()
        expect(convertToEUR()).toBeFalsy()
    })
})