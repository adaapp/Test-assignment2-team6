// Central controller for conversion
function convertController(convertFrom, convertVal, convertTo) {
    switch (convertTo) {
        case "USD":
            return convertToUSD(convertVal, convertFrom);
        case "GBP":
            return convertToGBP(convertVal, convertFrom);
        case "EUR":
            return convertToEUR(convertVal, convertFrom);
        case "RUB":
            return convertToRUB(convertVal, convertFrom);
        case "USD":
          return convertToUSD(convertVal, convertFrom);
        default:
            console.log("Unknown currency type: " + convertTo);
            return 0;
    }
}

// Exports for `npm test` (jest)
module.exports = {
    convertController
}