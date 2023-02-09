import express, {json} from "express";
import cors from 'cors';
import 'express-async-errors';
import {handleError} from "./utils/error";
import rateLimit from "express-rate-limit";
import {adRouter} from "./routers/ad.router";

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
}))
app.use(json())
app.use(rateLimit({
    windowMs: 5 * 30 * 1000, //5 min
    max: 100, // limit each IP to 100 requests per 'window' (here 5min)
}))

//Routes


app.use('/ad', adRouter);

app.use(handleError)


app.listen(3001, '0.0.0.0', () => {
    console.log('Server is ON and running on port http://localhost:3001');
})
