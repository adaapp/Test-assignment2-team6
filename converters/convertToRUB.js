
// Exchange rates
const RUB_RATES = {
    RUB: 1.00,
    GBP: 0.0096, 
    EUR: 0.011,
    USD: 0.013 
};

// Conversion function
function convertToRUB(value, fromCurrency) {
    if (value >= 0) {
        if (RUB_RATES[fromCurrency]) {
            return (value * RUB_RATES[fromCurrency]).toFixed(2);
        }
    }
    return 0;
}