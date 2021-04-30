const { convertToUSD } = require('../converters/convertToUSD')

describe('Testing the convertUSD function', () => {
    it('Tests for valid inputs', () => {
        expect(convertToUSD(100, 'RUB')).toBe('7507.70')
        expect(convertToUSD(100, 'EUR')).toBe('82.90')
        expect(convertToUSD(100, 'GBP')).toBe('72.19')
    })
    it('Tests for invalid inputs', () => {
        expect(convertToUSD('500', 'EUR')).toBeFalsy()      
        expect(convertToUSD(500, 'GHJ')).toBeFalsy() 
        expect(convertToUSD(undefined, 'BNM')).toBeFalsy()
        expect(convertToUSD()).toBeFalsy()
    })
})