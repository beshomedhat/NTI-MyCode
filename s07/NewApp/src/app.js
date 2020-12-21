const path = require('path');
const experss = require('express');
const hbs = require('hbs');
const request = require('request');
const { response } = require('express');

const app = experss();

const PORT = process.env.PORT || 3000;

const publicDir = path.join(__dirname,'../public');
const viewDir = path.join(__dirname,'../template/views');
const partialsDir = path.join(__dirname,'../template/partials');



app.use(experss.static(publicDir));
app.set('view engine','hbs');
app.set('views',viewDir);
hbs.registerPartials(partialsDir);

const url = 'https://newsapi.org/v2/top-headlines?country=eg&category=technology&apiKey=6ba9e9e2879449c39404d3dca27be026';



app.get('',(req,respon)=>{
    let articles = []
    request({url},(err,res)=>{
    data= JSON.parse(res.body)
    articles = data.articles;
    respon.render('home',{articles});
})
    
})

app.listen(PORT,()=>{
    console.log('hi')
})

