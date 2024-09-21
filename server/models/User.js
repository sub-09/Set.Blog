import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: true,
        unique: true, 
        trim: true,   
    },
    password: {
        type: String,
        required: true,
        minlength: 6, 
    }
}, {
    timestamps: true 
});

// Export the model
const User = mongoose.model('User', UserSchema);
export default User;
