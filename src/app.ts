import express, { Application, NextFunction, Request, Response } from 'express';
// npm i --save-dev @types/express
import cors from 'cors';
// npm i --save-dev @types/cors

const app: Application = express();
//using cors
app.use(cors());

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello World!');
    next();
})

export default app;
