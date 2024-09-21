import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true 
  },
  image: {
    type: String 
  }
}, {
  timestamps: true 
});

// Export the model
const Post = mongoose.model('Post', postSchema);
export default Post;
