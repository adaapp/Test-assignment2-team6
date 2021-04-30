
// Central controller for conversion
function convertController(convertTo, convertVal, convertFrom) {
    switch (convertTo) {
        case "USD":
            convertToUSD(convertVal, convertFrom);
            break;
        case "GBP":
            convertToGBP(convertVal, convertFrom);
            break;
        case "EUR":
            convertToEUR(convertVal, convertFrom);
            break;
        case "RUB":
            convertToRUB(convertVal, convertFrom);
            break;
        default:
            console.log("Unknown currency type");
    }
}

module.exports = {
    convertController
}