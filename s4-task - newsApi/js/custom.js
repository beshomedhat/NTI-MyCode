

var category = "general"

let display = function(allArticles){
    let colls="";
    for(let i=0; i<allArticles.length; i++)
        {
            colls+= `<div class="col-lg-3 col-md-6 text-center">
                                         <div class="card m-2" style="width: 18rem;">
                                           <img src="${allArticles[i].urlToImage}" class="card-img-top img-fluid">
                                           <div class="card-body">
                                             <h5 class="card-title">${allArticles[i].title}</h5>
                                             <p class="card-text">${allArticles[i].description}</p>
                                             <a href="${allArticles[i].url}" class="btn btn-primary">Read more</a>
                                           </div>
                                         </div>
                                     </div>`
        }
    document.querySelector("#rowData").innerHTML=colls;
}

let callArticles = function(){
    var url = `http://newsapi.org/v2/top-headlines?country=eg&category=${category}&apiKey=6ba9e9e2879449c39404d3dca27be026`;
    var req = new Request(url);
    fetch(req)
        .then(function(response) {
            return response.json() ;
        })
        .then(respon => display(respon.articles))

}

callArticles();


var AllLinks = document.getElementsByClassName("nav-link");

for(var i=0;i<AllLinks.length ;i++)
    {
        AllLinks[i].addEventListener("click",function(ev){
            
            
         category =  ev.target.innerHTML;
           
         callArticles();
            
            
        })
    }

