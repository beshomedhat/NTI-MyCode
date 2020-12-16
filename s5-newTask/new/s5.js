// function convert(d:number,type:string ="f"):any{
//     let c:number
//     if(type=="f")
//     {
//         c = (d*9/5)+32
//     }
//     else if(type=="c")
//     {
//         c = (d-32)*5/9
//     }
//     else{
//         return "wrong input";
//     }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//     return c
// }
// console.log(convert(0))
// console.log(convert(32,"c"))
// console.log(convert(32,"s"))
// interface Student{
//     name:string,
//     age:number,
//     grades:number[],
//     totalGrades();
// }
// let s1:Student={
//     name:"beshoy",
//     age:22,
//     grades:[20,20,20],
//     totalGrades: function(){
//         let total =0;
//         for(let i=0; i<this.grades.length; i++){
//             total+=this.grades[i];
//         }
//         console.log(total);
//     }
// }
// s1.totalGrades();
var Person = /** @class */ (function () {
    function Person(n) {
        this.name = n;
    }
    return Person;
}());
var Emp = /** @class */ (function (_super) {
    __extends(Emp, _super);
    function Emp(n, s) {
        var _this = _super.call(this, n) || this;
        _this.salary = s;
        return _this;
    }
    Emp.prototype.calcSalary = function () {
        console.log("Ur salary :" + this.salary);
    };
    return Emp;
}(Person));
var Inst = /** @class */ (function (_super) {
    __extends(Inst, _super);
    function Inst(n, w) {
        var _this = _super.call(this, n) || this;
        _this.workingH = w;
        return _this;
    }
    Inst.prototype.calcSalary = function () {
        console.log("Ur salary :" + this.workingH * 10);
    };
    return Inst;
}(Person));
var e1 = new Emp("e", 2000);
e1.calcSalary();
var e2 = new Inst("e", 100);
e2.calcSalary();
