
// Exchange rates
const RATES = {
    GBP: 0.0096, 
    EUR: 0.011,
    USD: 0.013 
};

// Conversion function
function convertToRUB(value, fromCurrency) {
    if (value instanceof number && value >= 0) {
        if (RATES[fromCurrency]) {
            return (value / RATES[fromCurrency]).toFixed(2);
        }
    }
    return 0;
}

// Exports
module.exports = {
    convertToRUB
};