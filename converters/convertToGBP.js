// Exchange rates
const GBP_RATES = {
    GBP: 1.00,
    USD: 1.40, 
    EUR: 1.15,
    RUB: 104.27
};

// Conversion function
function convertToGBP(value, fromCurrency) {
    if (typeof value === 'number' && value >= 0) {
        if (GBP_RATES[fromCurrency]) {
            return (value / GBP_RATES[fromCurrency]).toFixed(2);
        }
    }
    return 0;
}

// Exports for `npm test` (jest)
module.exports = {
    convertToGBP
}