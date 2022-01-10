var Greater = /** @class */ (function () {
    function Greater() {
    }
    return Greater;
}());
function GtreaterNo(a, b, c) {
    if (a > b && a > c) {
        console.log("A is Big", a);
    }
    else if (b > a && b > c) {
        console.log("b is big", b);
    }
    else {
        console.log("c is big", c);
    }
}
var n = new Greater();
console.log(GtreaterNo(12, 25, 89));
