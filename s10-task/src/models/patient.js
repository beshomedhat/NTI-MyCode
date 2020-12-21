const validator = require('validator')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')


const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        trim: true,
        minLenrth:10,
        maxLenrth:50
    },
    history:{
        type:String
    },
    userName:{
        type:String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    pass:{
        type:String,
        minLength:6,
        maxLength:100,
        trim:true
    },
    doctorId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Doctor'
    }
})

UserSchema.methods.toJSON=function(){
    const patient = this
    const userOBJ = patient.toObject()
    delete userOBJ.pass
    return userOBJ
}

UserSchema.pre('save',async function(next){
    const patient = this
    if(patient.isModified('pass')){
        patient.pass = await bcrypt.hash(patient.pass,12)
    }
    next()
})


UserSchema.statics.findByCredentials = async function(userName, pass){
    const user= await Patient.findOne({ userName })
    if(!user) throw new Error('unauthorized')
    const matched = await bcrypt.compare(pass, user.pass)
    if(!matched) throw new Error('unauthorized')
    return user    
}

const Patient = mongoose.model('Patient',UserSchema)
module.exports = Patient;