const { convertToUSD } = require('../converters/convertToUSD')

describe('Testing the convertUSD function', () => {
    it('Tests for valid inputs', () => {
        expect(convertToUSD(100, 'RUB')).toBe('1.33')
        expect(convertToUSD(100, 'EUR')).toBe('120.48')
        expect(convertToUSD(100, 'GBP')).toBe('138.89')
    })
    it('Tests for invalid inputs', () => {
        expect(convertToUSD('500', 'EUR')).toBeFalsy()      
        expect(convertToUSD(500, 'GHJ')).toBeFalsy() 
        expect(convertToUSD(undefined, 'BNM')).toBeFalsy()
        expect(convertToUSD()).toBeFalsy()
    })
})