import  express from 'express'
import session from 'express-session'
import cors from "cors"
import bodyParser from 'body-parser'; 
import userRoute from './routes/register.route.js'
import loginRoute from './routes/loginAdmin.route.js'

const app=express();    
app.use(cors());
app.use(bodyParser.json());   
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true, 
}));

  
app.use('/register', userRoute);  
app.use('/loginadmin', loginRoute);
 


export {app} 