var proArry = [
    { price: "100", product: "mobile" },
    { price: "200", product: "laptop" },
    { price: "300", product: "mic" },
    { price: "400", product: "pc" }
];
//map example
var newPro = proArry.map(function (value) {
    return value.price;
});
console.log(newPro);
//with arrow function
var newPro1 = proArry.map(function (value) { return value.price; });
console.log(newPro1);
//filter example
var filterEx = proArry.filter(function (value) {
    if (value.price < 300) {
        return true;
    }
});
console.log(filterEx);
//with arrow function
var arrowValue = proArry.filter(function (value) { return value.price > 300; });
console.log(arrowValue);
//sort value
var sortProduct = proArry.sort(function (a, b) { return (a.product > b.product ? 1 : -1); });
console.log(sortProduct);
