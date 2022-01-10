"use strict";
exports.__esModule = true;
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(i, n, s) {
        this.stdID = 12;
        this.stdName = "Sai";
        this.stdMarks = 80;
        this.stdID = i;
        this.stdName = n;
        this.stdMarks = s;
    }
    Student.prototype.display = function () {
        console.log(this.stdID);
        console.log(this.stdName);
        console.log(this.stdMarks);
    };
    return Student;
}());
exports.Student = Student;
var e1 = new Student(24, "ari", 90);
e1.display();
