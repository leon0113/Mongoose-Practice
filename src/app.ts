import express, { Application, NextFunction, Request, Response } from 'express';
// npm i --save-dev @types/express
import cors from 'cors';
import { Schema, Model } from 'mongoose';
// npm i --save-dev @types/cors

const app: Application = express();
//using cors
app.use(cors());

// parse data
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    // inserting a test data into mongodb 
    /*
    step 1: Interface
    step 2: Schema
    step 3: Model
    step 4: Database Query
    */
    //? 1 creating a interface
    interface IUser{
        id: string;
        role: 'student';
        password: string;
        name: {
            firstName: string,
            midddleName?: string,
            lastName: string
        };
        dob?: string;
        gender: "male" | "female";
        email?: string;
        contactNo: string;
        emergencyContactNo: string;
        presentAddress: string;
        permanentAddress: string
    }

    //? 2 creating Schema using interface
    const userSchema = new Schema<IUser>({
        id: {type: String, required: true, unique: true},
        role: {type: String, required: true},
        password: {type: String, required: true},
        name: { 
            firstName: {type: String, required: true},
            midddleName: {type: String},
            lastName:{type:String,required:true}
         },
         dob: {type: String, required:true},
         gender: {type: String, enum: ['male', 'female']},
         email: {type: String},
         contactNo: {type: String, required:true},
         emergencyContactNo: {type: String, required:true},
         presentAddress: {type: String, required:true},
         permanentAddress: {type: String, required:true}
      });


    // res.send('Hello World!');
    // next();
})

export default app;
