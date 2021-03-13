import "reflect-metadata"


import express, {json} from 'express'
import morgan from 'morgan'
import cors from 'cors'
import {createConnection} from 'typeorm';

import StudentRoute from "./routes/student.routes";


const app = express();
createConnection()


//middelware
app.use(cors())
app.use(morgan("dev"))
app.use(json())


//routes
app.use("/student", StudentRoute)

app.listen(3000);

console.log('Server on port 3000')