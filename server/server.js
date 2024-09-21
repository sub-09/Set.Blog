// imports 
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import User from './models/User';
import Post from './models/Post';


// initialize dotenv to load environment variables
dotenv.config();
app.use(express.json()); // To parse JSON request body
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded bodies


const app = express();

// port 
const PORT = process.env.PORT || 5000;
// database connection 


const databaseConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("Database Connected !")
    } catch (err) {
        console.log("Some error happened ", err)
    }
}

databaseConnection()






// Route 
app.get('/', (req, res) => {
    res.send("Hello There");
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
