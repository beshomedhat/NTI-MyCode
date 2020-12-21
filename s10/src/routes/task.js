const Task = require('../models/task')
const express = require('express')
const router = new express.Router()

//-------------- add task ------------------------
router.post('/addTask',async (req,res)=>{

    try{
        const data = new Task(req.body)
        await data.save()
        res.status(200).send({
            status:1,
            data: data,
            msg:"data inserted"
        })
    }
    catch(e){
        res.status(500).send({
            status:0,
            data: e,
            msg:"error data"
        })

    }
    // const data = new Task(req.body)
    // data.save()
    // .then(()=>{
    //     res.send('added')
    // })
    // .catch((e)=>
    //     res.send(e)
    // )
})

//-------------- get all tasks ------------------------
router.get('/allTasks',async (req,res)=>{

    try{
        const data = await Task.find({})
        res.status(200).send({
            status:1,
            data: data,
            msg:"data found"
        })
    }
    catch(e){
        res.status(500).send({
            status:0,
            data: e,
            msg:"error data"
        })

    }

})

//-------------- get one task ------------------------
router.get('/task/:id',async (req,res)=>{

    try{
        const _id = req.params.id
        const data = await Task.findById(_id)
        if(!data){
            res.status(200).send({
                status:2,
                data: data,
                msg:"not found"
            })
        }
        res.status(200).send({
            status:1,
            data: data,
            msg:"task found"
        })
    }
    catch(e){
        res.status(500).send({
            status:0,
            data: e,
            msg:"error data"
        })

    }

})

//-------------- edit task ------------------------
router.patch('/task/:id', async(req,res)=>{
    const _id= req.params.id
    const updates = req.body
    const updatesKeys = Object.keys(req.body)
    const allowedUpdates = ["name","status"]
    const validUpdates = updatesKeys.every((u)=>allowedUpdates.includes(u))
    if(!validUpdates)
        res.status(400).send({
            status:4,
            data:'',
            msg:'invalid updates'
        })
    try{
        const task = await Task.findByIdAndUpdate(_id, updates,{
            new:true,
            runValidators:true
        })
        if(!task){
            res.status(200).send({
                status:2,
                data:"",
                msg:"task not found"
            })
        }
        res.status(200).send({
            status:1,
            data: task, 
            msg:"task data updated successfuly"
        })
    }
    catch(e){
        res.status(500).send({
            statue: 0,
            data:'',
            msg:"error edit data"
        })
    }
})

//-------------- delete task ------------------------
router.delete('/task/:id', async(req,res)=>{
    const _id= req.params.id
    try{
        const task = await Task.findByIdAndDelete(_id)
        if(!task){
            res.status(200).send({
                status:2,
                data:"",
                msg:"task not found"
            })
        }
        res.status(200).send({
            status:1,
            data: task, 
            msg:"task data deleted successfuly"
        })
    }
    catch(e){
        res.status(500).send({
            statue: 0,
            data:'',
            msg:"error delete data"
        })
    }
})

module.exports = router