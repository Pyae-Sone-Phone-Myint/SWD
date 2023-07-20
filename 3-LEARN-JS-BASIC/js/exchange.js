const rates = {
    usd : 2100,
    eur : 2108,
    sgd : 1490,
}

function usdToMMK(inputUsd){
    return (inputUsd * rates.usd) + " MMK";
}

function toMMK(inputAmount, fromCurrency) {
    return (inputAmount * rates[fromCurrency] + " MMK");
};

// console.log(usdToMMK(500));
// console.log(toMMK(500, "usd"));
// console.log(toMMK(500, "sgd"));
// console.log(toMMK(500, "eur"))
// console.log(eurToMMK(200));
// console.log(sgdToMMK(100));

function toCurrency(inputMMK, currency) {
    return (inputMMK / rates[currency] + currency)
}

// console.log(toCurrency(600000, "usd"));
// console.log(toCurrency(600000, "eur"));
// console.log(toCurrency(600000, "sgd"));

// from any currency to any currency
// input => mmk => inputcurrency => outputcurrency

function toAnyCurrency(inputAmount,fromCurrency,toCurrency) {
    let mmk = inputAmount * rates[fromCurrency];
    let result = mmk / rates[toCurrency];
    return result + toCurrency;
}

console.log(toAnyCurrency(500, "sgd", "usd"));
console.log(toAnyCurrency(500, "sgd", "sgd"));
console.log(toAnyCurrency(500, "sgd", "eur"));
