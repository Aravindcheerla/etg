function getArray(items : any[]) : any[] {
    return new Array().concat(items);
}

let myNumArr= getArray([100, 300, 500]);
let myStrArr =getArray(["Hello","World"]);

myNumArr.push(500);
myStrArr.push("Hello TypeScript");

myNumArr.push("Hi");
myStrArr.push(500);

console.log(myNumArr);
console.log(myStrArr);