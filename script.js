
const RATES = {
    USD: { GBP: 0.72, EUR: 0.82 }, 
    EUR: { GBP: 0.87, USD: 1.21 },
    GBP: { USD: 1.40, EUR: 1.15 }
};

function convertCurrency() {

    let fromCurr    = document.getElementById("currency_type-from").value;
    let toCurr      = document.getElementById("currency_type-to").value;
    let currAmount  = document.getElementById("currency_value").value;
    let converted   = currAmount;

    if (fromCurr !== toCurr) {
        converted = (currAmount / RATES[fromCurr][toCurr]).toFixed(2);
    }
    
    if (currAmount < 0) {
        currAmount = 0;
    }
    document.getElementById("converted_output").value = converted;
}

module.exports = {
    convertCurrency
}