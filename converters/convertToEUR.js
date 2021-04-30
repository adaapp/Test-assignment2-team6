
// Exchange rates
const EUR_RATES = {
    EUR: 1.000,
    GBP: 0.870, 
    USD: 1.210,
    RUB: 90.67
};

// Conversion function
function convertToEUR(value, fromCurrency) {
    if (typeof value === 'number' && value >= 0) {
        if (EUR_RATES[fromCurrency]) {
            return (value / EUR_RATES[fromCurrency]).toFixed(2);
        }
    }
    return 0;
}

// Exports for `npm test` (jest)
module.exports = {
    convertToEUR
}