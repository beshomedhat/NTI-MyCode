const validator = require('validator')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Patient = require('./patient')

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        trim: true,
        minLenrth:10,
        maxLenrth:50
    },
    status:{
        type:Boolean,
        default: true
    },
    spesialize:{
        type:String,
        required: true
    },
    address:{
        type:String,
        required: true
    },
    phone:{
        type:String,
        required: true,
        validate(value){
            if(!validator.isMobilePhone(value)) throw new Error ('invalid phone')
        }
    },
    whatsapp:{
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
    }
})

UserSchema.virtual('Patient',{
    ref:'Patient', localField:'_id', foreignField:'doctorId'
})

UserSchema.methods.toJSON=function(){
    const doctor = this
    const userOBJ = doctor.toObject()
    delete userOBJ.pass
    return userOBJ
}

UserSchema.pre('save',async function(next){
    const doctor = this
    if(doctor.isModified('pass')){
        doctor.pass = await bcrypt.hash(doctor.pass,12)
    }
    next()
})


UserSchema.statics.findByCredentials = async function(userName, pass){
    const user= await Doctor.findOne({ userName })
    if(!user) throw new Error('unauthorized')
    const matched = await bcrypt.compare(pass, user.pass)
    if(!matched) throw new Error('unauthorized')
    return user    
}

const Doctor = mongoose.model('Doctor',UserSchema)
module.exports = Doctor;