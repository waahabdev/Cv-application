import mongoose from 'mongoose'


//mongoose genererar ett _id automatiskt 
const userSchema = mongoose.Schema({
    firstname:{ type: String},
    lastname:{ type: String, required: true },
    email:{ type: String, required: true, unique:true },
    password:{ type: String, required: true },
    isadmin:{ type: Boolean, required: true },
    date: { type: Date, default: Date.now }
    
}) 

//kopplar schema till model
export const user = mongoose.model('user', userSchema);

