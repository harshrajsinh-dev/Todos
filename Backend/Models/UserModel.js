import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    userId: {
        type: Number,
    },
    userName: {
        type: String
    },

    email: {
        type: String,
        unique: true,
    },

    passWord: {
        type: String,
    }
})

//    use if User collection exist || create new 

const Usermodel = mongoose.models.User || new mongoose.model("User", UserSchema)

export default Usermodel