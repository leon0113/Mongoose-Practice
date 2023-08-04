import { HydratedDocument, Model } from "mongoose";

export interface IUser {
    id: string;
    role: 'student';
    password: string;
    name: {
        firstName: string;
        midddleName?: string;
        lastName: string;
    };
    dob?: string;
    gender: "male" | "female";
    email?: string;
    contactNo: string;
    emergencyContactNo: string;
    presentAddress: string;
    permanentAddress: string;
}

//! custom instance
export interface IUserMethods {
    fullName(): string;
}


//! static instance
export interface UserModel extends Model<IUser, {}, IUserMethods> {
    getAdmins(): Promise<HydratedDocument<IUser, IUserMethods>>;
  }
