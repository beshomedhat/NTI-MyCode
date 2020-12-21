const Doctor = require('../models/doctor')
const express = require('express')
const router = new express.Router()

//-------------- register Doctor ------------------------
router.post('/registerDoctor',async (req,res)=>{

    try{
        const data = new Doctor(req.body)
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
})

//-------------- get all Doctors ------------------------
router.get('/allDoctors',async (req,res)=>{

    try{
        const data = await Doctor.find({})
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

//-------------- get one Doctor ------------------------
router.get('/doctor/:id',async (req,res)=>{

    try{
        const _id = req.params.id
        const data = await Doctor.findById(_id)
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
            msg:"Doctor found"
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

//-------------- edit Doctor ------------------------
router.patch('/doctor/:id', async(req,res)=>{
    const _id= req.params.id
    const updates = req.body
    const updatesKeys = Object.keys(req.body)
    const allowedUpdates = ["name","status","address","phone","whatsapp"]
    const validUpdates = updatesKeys.every((u)=>allowedUpdates.includes(u))
    if(!validUpdates)
        res.status(400).send({
            status:4,
            data:'',
            msg:'invalid updates'
        })
    try{
        const doctor = await Doctor.findByIdAndUpdate(_id, updates,{
            new:true,
            runValidators:true
        })
        if(!doctor){
            res.status(200).send({
                status:2,
                data:"",
                msg:"Doctor not found"
            })
        }
        res.status(200).send({
            status:1,
            data: doctor, 
            msg:"Doctor data updated successfuly"
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

//-------------- delete Doctor ------------------------
router.delete('/doctor/:id', async(req,res)=>{
    const _id= req.params.id
    try{
        const doctor = await Doctor.findByIdAndDelete(_id)
        if(!doctor){
            res.status(200).send({
                status:2,
                data:"",
                msg:"Doctor not found"
            })
        }
        res.status(200).send({
            status:1,
            data: doctor, 
            msg:"Doctor data deleted successfuly"
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

//-------------------login---------------------------------
router.post('/login', async(req,res)=>{
    try{
        const doctor = await Doctor.findByCredentials(req.body.userName, req.body.pass)
        res.send({
            status:1,
            data:doctor,
            msg:"logged in"
        })
    }
    catch(e){
        res.status(500).send({
            status:0,
            data:"",
            msg:"err in data"
        })
    }
})

module.exports = router