var Specifiedvalue = /** @class */ (function () {
    function Specifiedvalue() {
        this.numarr = [1, 2, 3, 4];
    }
    Specifiedvalue.prototype.find = function () {
        for (this.i = 0; this.i < this.numarr.length; this.i = this.i + 1) {
            if (4 == this.numarr[this.i]) {
                console.log("number found");
            }
        }
    };
    return Specifiedvalue;
}());
var array = new Specifiedvalue();
array.find();
