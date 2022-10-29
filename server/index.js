import express from 'express';
import Connection from './database/db.js';
import Routes from './routes/route.js'
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors'
const app =express();
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
dotenv.config();
const PORT = 8000 ;
app.use(cors());
app.use('/',Routes) 

const username = process.env.DB_USERNAME ;
const password = process.env.DB_PASSWORD ;

Connection(username,password)

app.listen(PORT, ()=>console.log(`server is running successfully on PORT ${PORT}`));