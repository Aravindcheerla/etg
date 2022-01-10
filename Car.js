"use strict";
exports.__esModule = true;
exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.getSalePrice = function () {
        console.log(this.regularPrice);
    };
    Car.prototype.display = function () {
        console.log(this.speed);
        console.log(this.regularPrice);
        console.log(this.color);
    };
    return Car;
}());
exports.Car = Car;
