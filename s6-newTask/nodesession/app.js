// const chalk = require('chalk');
 
// console.log(chalk.blue('Hello world!'));


// x= process.argv[2];

// switch(x){
//     case 'addTask': console.log("add ur Task"); break
//     case 'editTask': console.log("edit ur Task"); break
//     case 'deleteTask': console.log("delete ur Task"); break
//     default: console.log("wrong input"); break
// }
const fs= require('fs')
const yargs = require('yargs');
//--------------------------------------------------------------------------
//------------------------get Data--------------------------------------
let customers = [];
try{
    customers = JSON.parse(fs.readFileSync('myData.json').toString())
}
catch(e)
{
    fs.writeFileSync('myData.json', "[]")
}
//--------------------------------------------------------------------------
//------------------------getId function--------------------------------------
let getId = function(){
    if(customers.length==0){
        return 1;
    }
    else{
        return customers[customers.length-1].id+1;
    }
}
//--------------------------------------------------------------------------
//------------------------delete function--------------------------------------
let deleteCustomer = function(id){
    for(let i= 0; i<customers.length; i++)
    {
        if(customers[i].id==id){
            customers.splice(i,1);
            console.log("deleted");
        }
    }
}
//--------------------------------------------------------------------------
//------------------------edit function--------------------------------------
let editCustomer = function(id,name,job,balance){
    for(let i= 0; i<customers.length; i++)
    {
        if(customers[i].id==id){
            customers[i].name=name;
            customers[i].job=job;
            customers[i].balance=balance;
            console.log("updated");
        }
    }
}
//--------------------------------------------------------------------------
//------------------------command add--------------------------------------
yargs.command({
    command: 'add',
    describe: 'add new customer',
    builder:{
        customerId:{
            type:'number'
        },
        customerName:{
            type:'string',
            demandOption:true
        },
        customerJob:{
            type:'string',
            demandOption:true
        },
        customerBalance:{
            type:'number',
            demandOption:true
        }
    },
    handler(argv){
        customers.push({
            id: getId(),
            name : argv.customerName,
            job : argv.customerJob,
            balance : argv.customerBalance
        })
        fs.writeFileSync('myData.json', JSON.stringify(customers))
    }
})
//--------------------------------------------------------------------------
//------------------------command read--------------------------------------
yargs.command({
    command:'read',
    handler(){

        data1 = JSON.parse(fs.readFileSync('myData.json').toString())
        console.log(data1)
    }
})
//--------------------------------------------------------------------------
//------------------------command delete--------------------------------------
yargs.command({
    command:'delete',
    builder:{
        customerId:{
            type:'number',
            demandOption:true
        }
    },
    handler(argv){
        deleteCustomer(argv.customerId);
        fs.writeFileSync('myData.json', JSON.stringify(customers))
    }
})
//--------------------------------------------------------------------------
//------------------------command edit--------------------------------------
yargs.command({
    command:'edit',
    builder:{
        customerId:{
            type:'number',
            demandOption:true
        },
        customerName:{
            type:'string',
            demandOption:true
        },
        customerJob:{
            type:'string',
            demandOption:true
        },
        customerBalance:{
            type:'number',
            demandOption:true
        }
    },
    handler(argv){
        editCustomer(argv.customerId,argv.customerName,argv.customerJob,argv.customerBalance)
        fs.writeFileSync('myData.json', JSON.stringify(customers))
    }
})
//--------------------------------------------------------------------------
yargs.parse();