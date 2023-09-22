import bodyParser from 'body-parser';
import express from 'express';

import eventRoutes from './routes/events.js';

import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(bodyParser.json());

app.listen(process.env.PORT,()=>{
    console.log(`Server is started on PORT:${process.env.PORT}`)
});
