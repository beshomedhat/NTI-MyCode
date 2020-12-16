abstract class Person{
    name:string;
    id:number;
    job:string;
    constructor(n: string,i: number,j: string){
        this.name=n;
        this.id=i;
        this.job=j;
    }
}

class Customer extends Person{
    accountNum:number;
    balance:number;
    constructor(n: string,i: number,j: string,a: number,b:number){
        super(n,i,j);
        this.accountNum=a;
        this.balance=b;
    }
}

class Emp extends Person{
    userName:string;
    password:string;
    constructor(n: string,i: number,j: string,u: string,p:string){
        super(n,i,j);
        this.userName=u;
        this.password=p;
    }
    login(u:string,p:string){
        if(u==this.userName && p==this.password){
            console.log("welcome")
        }
        else{
            console.log("wrong user name or password")
        }
    }
}

class CustomerCare extends Emp{
    constructor(n: string,i: number,u: string,p:string){
        super(n,i,"CustomerCare",u,p)
    }
    addNewCustomer(n: string,i: number,j: string,a: number,b:number): Customer{
        let obj = new Customer(n,i,j,a,b)
        return obj;
    }
}

class Teller extends Emp{
    constructor(n: string,i: number,u: string,p:string){
        super(n,i,"Teller",u,p)
    }
    addBalance(b:number,c:Customer){
        c.balance+=b;
    };
    withdraw(b:number,c:Customer){
        if(c.balance<b){
            console.log("Ur balance is lower")
        }
        else{
            c.balance = c.balance - b;
        }
    };
}

let c= new Customer("b",1,"d",1,100);
let t = new Teller('a',2,'a','a');
t.addBalance(10,c);
console.log(c.balance)
t.withdraw(10,c);
console.log(c.balance)