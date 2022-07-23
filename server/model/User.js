import mongoose from 'mongoose'


const UserSchema = new mongoose.Schema({
    name: {type: String, required: true, trim: true},
    email: {type: String, required: true, trim: true},
    password: {type: String, required: true, trim: true},
    
}, {timestamps: true})



const UserModel = mongoose.model('User', UserSchema)

export default UserModel