const validator = require('validator')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        trim: true,
        minLenrth:10,
        maxLenrth:50,

    },
    status:{type:Boolean},
    date:{type:Date},
    email:{
        type:String,
        required: true,
        unique: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)) throw new Error ('invalid email')
        }
    },
    pass:{
        type:String,
        minLength:6,
        maxLength:20,
        trim:true ,
        validate(value){
            if(value.toLowerCase().includes('marwa')) throw new Error('invalid pass')
            //MarWa Marwa MArwa MaRwa MarWa 
        }
}})

UserSchema.methods.toJSON=function(){
    const task = this
    const userOBJ = task.toObject()
    delete userOBJ.pass
    return userOBJ
}

UserSchema.pre('save',async function(next){
    const task = this
    if(task.isModified('pass')){
        task.pass = await bcrypt.hash(task.pass,12)
    }
    next()
})
const Task = mongoose.model('Task',UserSchema)
module.exports = Task;




// const Task = mongoose.model('Task',{
//     name:{
//         type:String,
//         required: true,
//         trim: true,
//         minLenrth:10,
//         maxLenrth:50,

//     },
//     status:{type:Boolean},
//     date:{type:Date},
//     email:{
//         type:String,
//         required: true,
//         unique: true,
//         lowercase: true,
//         validate(value){
//             if(!validator.isEmail(value)) throw new Error ('invalid email')
//         }
//     },
//     pass:{
//         type:String,
//         minLength:6,
//         maxLength:20,
//         trim:true ,
//         validate(value){
//             if(value.toLowerCase().includes('marwa')) throw new Error('invalid pass')
//             //MarWa Marwa MArwa MaRwa MarWa 
//         }
//     }

// })
