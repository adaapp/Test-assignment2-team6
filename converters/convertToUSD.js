// Exchange rates
const USD_RATES = { 
    USD: 1.00,
    GBP: 0.72,
    EUR: 0.83,
    RUB: 75.09
};

// Conversion function
function convertToRUB(value, fromCurrency) {
    if (typeof value === 'number' && value >= 0) {
        if (USD_RATES[fromCurrency]) {
            return (value / USD_RATES[fromCurrency]).toFixed(2);
        }
    }
    return 0;
}

// Exports for `npm test` (jest)
module.exports = {
    convertToUSD
}