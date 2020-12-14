/*let a= 1;
function myFun(){
    return{
        inc(){a+=1; return a},
        dec(){a-=1; return a},
        get(){return a}
    }
}

console.log(myFun().inc()) ;
console.log(myFun().dec());
console.log(myFun().get());


let tasks = {
    name: "task1",
    title: "t1",
    display(){ console.log(this.name,this.title) }
}

tasks.display();


let data = [
    {
        name:'besho',
        id:1   
    },
    {
        name:'ahmed',
        id:2   
    }
]

const print = (d)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(!Array.isArray(d)) return reject('error')
            resolve(console.log(d))
        },3000)
    })

}

let fun = async()=>{
    s1 = await print(data)
    return s1
}

fun().then(res=>{
    console.log(res)
})
.catch((e)=>{
    console.log(e)
})
*/
let display = function(customers){
    let colls="";
    for(let i=0; i<customers.length; i++)
        {
            colls+=`
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${customers[i].url}">
                <div class="card-body">
                    <h3>${customers[i].id}</h3>
                <p class="card-text">${customers[i].title}</p>
                </div>
          </div>`
        }
    document.querySelector("#cardData").innerHTML=colls;
}

fetch('https://jsonplaceholder.typicode.com/photos')
  .then(response => response.json())
  .then(json => display(json))



