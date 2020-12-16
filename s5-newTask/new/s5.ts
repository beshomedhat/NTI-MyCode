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



class Person{
    name:string;
    constructor(n){
        this.name=n;
    }
}

class Emp extends Person{
    salary: number;
    constructor(n,s){
        super(n);
        this.salary=s;
    }
    calcSalary(){
        console.log("Ur salary :"+ this.salary)
    }
}

class Inst extends Person{
    workingH: number;
    constructor(n,w){
        super(n);
        this.workingH=w;
    }
    calcSalary(){
        console.log("Ur salary :"+ this.workingH * 10 );
    }
}

let e1 = new Emp("e",2000);
e1.calcSalary();

let e2 = new Inst("e",100);
e2.calcSalary();
