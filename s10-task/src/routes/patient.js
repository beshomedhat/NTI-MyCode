const Patient = require('../models/patient')
const express = require('express')
const router = new express.Router()

//-------------- register Patient ------------------------
router.post('/registerPatient',async (req,res)=>{

    try{
        const data = new Patient(req.body)
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

//-------------- get all Patients ------------------------
router.get('/allPatients',async (req,res)=>{

    try{
        const data = await Patient.find({})
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

//-------------- get one Patient ------------------------
router.get('/patient/:id',async (req,res)=>{

    try{
        const _id = req.params.id
        const data = await Patient.findById(_id)
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
            msg:"Patient found"
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

//-------------- edit Patient ------------------------
router.patch('/patient/:id', async(req,res)=>{
    const _id= req.params.id
    const updates = req.body
    const updatesKeys = Object.keys(req.body)
    const allowedUpdates = ["name",]
    const validUpdates = updatesKeys.every((u)=>allowedUpdates.includes(u))
    if(!validUpdates)
        res.status(400).send({
            status:4,
            data:'',
            msg:'invalid updates'
        })
    try{
        const patient = await Patient.findByIdAndUpdate(_id, updates,{
            new:true,
            runValidators:true
        })
        if(!patient){
            res.status(200).send({
                status:2,
                data:"",
                msg:"Patient not found"
            })
        }
        res.status(200).send({
            status:1,
            data: patient, 
            msg:"Patient data updated successfuly"
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

//-------------- delete Patient ------------------------
router.delete('/patient/:id', async(req,res)=>{
    const _id= req.params.id
    try{
        const patient = await Patient.findByIdAndDelete(_id)
        if(!patient){
            res.status(200).send({
                status:2,
                data:"",
                msg:"Patient not found"
            })
        }
        res.status(200).send({
            status:1,
            data: patient, 
            msg:"Patient data deleted successfuly"
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
router.post('/loginPatient', async(req,res)=>{
    try{
        const patient = await Patient.findByCredentials(req.body.userName, req.body.pass)
        res.send({
            status:1,
            data:patient,
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