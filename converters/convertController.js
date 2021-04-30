// Central controller for conversion
function convertController(convertTo, convertVal, convertFrom) {
    switch (convertTo) {
        case "USD":
            return convertToUSD(convertVal, convertFrom);
        case "GBP":
            return convertToGBP(convertVal, convertFrom);
        case "EUR":
            return convertToEUR(convertVal, convertFrom);
        case "RUB":
            return convertToRUB(convertVal, convertFrom);
        default:
            console.log("Unknown currency type: " + convertTo);
            return 0;
    }
}