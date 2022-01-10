"use strict";
exports.__esModule = true;
var PersonDetail = /** @class */ (function () {
    function PersonDetail() {
    }
    PersonDetail.prototype.getfullName = function () {
        return this.first + this.last;
    };
    return PersonDetail;
}());
var p1 = new PersonDetail();
p1.first = "Aravind";
p1.last = "Cheerla";
console.log(p1.getfullName());
