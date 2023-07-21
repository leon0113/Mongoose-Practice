import express, { Application, NextFunction, Request, Response } from 'express';
// npm i --save-dev @types/express
import cors from 'cors';
import { Schema, model } from 'mongoose';
// npm i --save-dev @types/cors

const app: Application = express();
//using cors
app.use(cors());

// parse data
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response, next: NextFunction) => {

    //? inserting a test data into mongodb 
    /*
    !step 1: Interface
    !step 2: Schema
    !step 3: Model
   !step 4: Database Query
    */
    //! 1 creating a interface
    // interface IUser {
    //     id: string;
    //     role: 'student';
    //     password: string;
    //     name: {
    //         firstName: string;
    //         midddleName?: string;
    //         lastName: string;
    //     };
    //     dob?: string;
    //     gender: "male" | "female";
    //     email?: string;
    //     contactNo: string;
    //     emergencyContactNo: string;
    //     presentAddress: string;
    //     permanentAddress: string;
    // }

    //! 2 creating Schema using interface
    // const userSchema = new Schema<IUser>({
    //     id: { type: String, required: true, unique: true },
    //     role: { type: String, required: true },
    //     password: { type: String, required: true },
    //     name: {
    //         firstName: { type: String, required: true },
    //         midddleName: { type: String },
    //         lastName: { type: String, required: true }
    //     },
    //     dob: { type: String, required: true },
    //     gender: { type: String, enum: ['male', 'female'] },
    //     email: { type: String },
    //     contactNo: { type: String, required: true },
    //     emergencyContactNo: { type: String, required: true },
    //     presentAddress: { type: String, required: true },
    //     permanentAddress: { type: String, required: true }
    // });

    // //! 3 creating model using interface and schema
    // const User = model<IUser>('User', userSchema);

    //! 4 Database Query 
    const createUserToDb = async () => {
        const user = new User({
            id: '100',
            role: 'student',
            password: 'abc123',
            name: {
                firstName: 'Tahjib',
                midddleName: 'Hossain',
                lastName: 'Leon'
            },
            dob: '17 Aug 1998',
            gender: "male",
            email: 'abc@gmail.com',
            contactNo: '0132423',
            emergencyContactNo: '02324',
            presentAddress: 'Dhaka',
            permanentAddress: 'Khulna'
        });
        await user.save();
        console.log(user);
    };
 
    createUserToDb();

    // res.send('Hello World!');
    // next();
})

export default app;

// file structure 
// Modular pattern
/*
 interface -> user.interface.ts
 schema, model -> user.model.ts
 route
 route function (api router controller) -> user.controller.ts
 Database query -> user.service.ts
*/