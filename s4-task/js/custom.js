let display = function(posts){
    let colls="";
    for(let i=0; i<20; i++)
        {
            colls+=`
            <div class="col-lg-4 col-md-6 col-sm-12 pb-5">
                <div class="member border py-5">
                    <img src="./imgs/undraw_stand_out_1oag.svg" class=" img-fluid " alt="post img" />
                    <h2 class="founder-head my-3">User Id:  ${posts[i].userId}</h2>
                    <h4 class="founder-head">Posts Id:  ${posts[i].id}</h4>
                    <p class="p1">${posts[i].title.substr(0,40)}...</p>
                    <p class="p1">${posts[i].body.substr(0,40)}...</p>
                </div>
            </div>`
        }
    document.querySelector("#postsData").innerHTML=colls;
}

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => display(json))