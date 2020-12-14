customers = JSON.parse(localStorage.getItem('customers')) || []

accNumsStart = 200200

document.querySelector("#showForm").addEventListener('click', function(e){
    e.target.textContent == "Add New Customer"? e.target.textContent="Hide Form": e.target.textContent="Add New Customer";

    document.querySelector('#addCustomerForm').classList.toggle('d-none')    
})

//---------------------ADD FUNCTION---------------------------------
document.querySelector("#addCustomerData").addEventListener('submit',function(e){
    e.preventDefault()
    data = e.target.elements
    customer ={ 
        accNum: customers.length>0 ? customers[customers.length-1].accNum+1 : accNumsStart+1
     }    
    for(i=0; i<data.length-1;i++){ 
       customer[data[i].name] = data[i].value
    }
    if(checkValidation(customer['customerName'],customer['customerBalance'])){
        customers.push(customer)
        localStorage.setItem('customers', JSON.stringify(customers))
        e.target.reset()
        displayCustomers();
        document.querySelector("#showForm").textContent="Add New customers"
        document.querySelector('#addCustomerForm').classList.add('d-none') 
    }
})
//---------------------------------------------------------------------
//---------------------DISPLAY FUNCTION---------------------------------
let displayCustomers =function()
{
    let colls="";
    for(let i=0; i<customers.length; i++)
        {
            colls+=`<tr>
                        <th scope="row">${i+1}</th>
                        <td>${customers[i].customerName}</td>
                        <td>${customers[i].customerBalance}</td>
                        <td>${customers[i].accNum}</td>
                        <td>
                            <button class="btn btn-danger mx-1" onclick="deleteCustomer(${i})">Delete</button>
                        </td>
                        <td>
                            <button class="btn btn-primary mx-1"" >Update</button>
                        </td>
                    </tr>`
        }
    document.querySelector("#customersTableBody").innerHTML=colls;
}
//-------------------------------------------------------------------------

//---------------------DELETE FUNCTION---------------------------------
function deleteCustomer(id)
{
    customers.splice(id,1);
    localStorage.setItem("customers",JSON.stringify(customers));
    displayCustomers();
}
//-------------------------------checkValidation---------------------------------------
function checkValidation(name,balance)
{
    document.querySelector("#error").classList.remove('d-none')   
    let validName = /^[A-Z][a-zA-Z0-9 ]{2,9}$/;
    let validPrice = /^[1-9][0-9]{2,12}$/;
    let colls="";
    if(validName.test(name)==false)
        {
            document.querySelector("#error").classList.remove('d-none')   
            colls ="<p>Name must start with upperCase and be at least 3 letters</p>"
            document.getElementById("error").innerHTML=colls;
            return false;
        }
    else if(validPrice.test(balance)==false)
        {
            document.querySelector("#error").classList.remove('d-none')   
            colls ="<p>Balance must be a number and be from 100 to 999999999999</p>"
            document.getElementById("error").innerHTML=colls;
            return false;
        }
        else{
            document.querySelector("#error").classList.add('d-none')  
            return true
        } 
    }
//----------------------------------------------------------------------
//---------------------SEARCH FUNCTION---------------------------------
let searchNameInp = document.getElementById("searchNameInp");
searchNameInp.onkeyup=function(){
    searchProduct(searchNameInp.value)
}

function searchProduct(searchValue)
{
    let colls ="";
    if(searchNameInp.value != "")
        {
            for(let i=0; i<customers.length; i++)
                {
                    
                    if(customers[i].customerName.includes(searchValue))
                        {
                            colls+=`<tr>
                        <th scope="row">${i+1}</th>
                        <td>${customers[i].customerName}</td>
                        <td>${customers[i].customerBalance}</td>
                        <td>${customers[i].accNum}</td>
                        <td>
                            <button class="btn btn-danger mx-1" onclick="deleteCustomer(${i})">Delete</button>
                        </td>
                        <td>
                            <button class="btn btn-primary mx-1" onclick="updateProduct(${i})">Update</button>
                        </td>
                    </tr>`
                        }
                }
                document.querySelector("#customersTableBody").innerHTML=colls;
        }
    else
        {
            displayCustomers();
        }
    
}
//----------------------------------------------------------------------
displayCustomers();
