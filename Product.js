var Product = /** @class */ (function () {
    function Product() {
    }
    Product.prototype.displsay = function () {
        console.log(this.pid);
        console.log(this.pname);
        console.log(this.price);
    };
    return Product;
}());
var pr1 = new Product();
pr1.pid = 123;
pr1.pname = "Ari";
pr1.price = 223.7;
pr1.displsay();
