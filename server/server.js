import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes);


const CONNECTION_URL = 'mongodb+srv://Rotiboy:Rohith28@rohith.svglbym.mongodb.net/?retryWrites=true&w=majority&appName=Rohith';
const PORT = 5000;

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on Port ${PORT}`)))
    .catch((error) => console.log(error));

