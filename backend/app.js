import  express from 'express'
import cors from "cors"
import bodyParser from 'body-parser';
import userRoute from './routes/register.route.js'

const app=express();    
app.use(cors());
app.use(bodyParser.json());   

  
app.use('/register', userRoute);  
 


export {app} 