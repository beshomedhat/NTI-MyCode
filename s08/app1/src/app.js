const path = require('path')
const express = require('express')
const hbs = require('hbs')
const request = require('request')
const app = express()
const PORT = process.env.PORT || 3000
const publicDir = path.join(__dirname, '../public')
const viewDir = path.join(__dirname, '../template/views')
const partialDir = path.join(__dirname, '../template/partials')
app.use(express.static(publicDir))
app.set('view engine', 'hbs')
app.set('views', viewDir)
hbs.registerPartials(partialDir)

app.get('', (req, res)=>{  
const url ="https://receiption.app/Admin/api/doctors/0/50"
console.log(req.query.a)
data = []
 request ( {url}, (err, response)=>{
      d = JSON.parse(response.body)
      data = d.data
     res.render('home',{data})
 } ),(err)=>{
     console.log(err)
 }

})


//118
app.get('/:id',(req,res)=>{
    _id = req.params.id
    const url =`https://receiption.app/Admin/api/FindDoctor/${_id}`
    data = []
     request ( {url}, (err, response)=>{
try{
    d = JSON.parse(response.body)
    data= d.data[0]
}
    catch(e){
        res.send('404',{
            errMsg:'error'
        })
    }
         res.render('doctor',{data})
     } ),(err)=>{
         res.render('404')
         console.log(err)
     }
})


app.listen(PORT, ()=>{
    console.log('run avaliable on localhost')
})
