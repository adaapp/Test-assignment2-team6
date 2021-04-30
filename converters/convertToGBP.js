
// Exchange rates
const RATES = {
    USD: 1.40, 
    EUR: 1.15,
    RUB: 104.27
};

// Conversion function
function convertToGBP(value, fromCurrency) {
    if (value instanceof number && value >= 0) {
        if (RATES[fromCurrency]) {
            return (value / RATES[fromCurrency]).toFixed(2);
        }
    }
    return 0;
}

// Exports
module.exports = {
    convertToGBP
};