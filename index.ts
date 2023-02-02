import express, {json} from "express";
import cors from 'cors';
import 'express-async-errors';
import {handleError, ValidationError} from "./utils/error";

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
}))
app.use(json())

//Routes

app.get('/', async(req, res) => {
    throw new ValidationError('damm it!')
})

app.use(handleError)

app.listen(3001, '0.0.0.0', () => {
    console.log('Server is ON and running on port http://localhost:3001');
})
//4.30**********************