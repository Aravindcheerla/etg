function getArray(items) {
    return new Array().concat(items);
}
var myNumArr = getArray([100, 300, 500]);
var myStrArr = getArray(["Hello", "World"]);
myNumArr.push(500);
myStrArr.push("Hello TypeScript");
myNumArr.push("Hi");
myStrArr.push(500);
console.log(myNumArr);
console.log(myStrArr);
