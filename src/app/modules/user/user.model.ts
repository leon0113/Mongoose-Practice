import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interface";

// type UserModel = Model<IUser, {}, IUserMethods>;

const userSchema = new Schema<IUser, UserModel, IUserMethods>({
    id: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    password: { type: String, required: true },
    name: {
        firstName: { type: String, required: true },
        midddleName: { type: String },
        lastName: { type: String, required: true }
    },
    dob: { type: String, required: true },
    gender: { type: String, enum: ['male', 'female'] },
    email: { type: String },
    contactNo: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true }
});

userSchema.method('fullName', function fullName() {
    return this.name.firstName + ' ' + this.name.lastName;
  });

userSchema.static('getAdmins', async function getAdmin(){
  const admins = await this.find({role: 'admin'});
  return admins;
})

//! 3 creating model using interface and schema 
const User = model<IUser, UserModel>('User', userSchema);

export default User;