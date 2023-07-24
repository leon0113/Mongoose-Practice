import { IUser } from './user.interface';
import User from "./user.model";

//! send user to db
export const createUserToDb = async (payload: IUser): Promise<IUser> => {
    const user = await new User(payload);    // here User in class and user is a instance of it.
    await user.save(); // to save in the db  // isntance method
    return user;
};
//! get all users from db
export const getUsersFromDb = async (): Promise<IUser[]> => {
    const users = await User.find(); // find every user
    return users;
}

//! find one user from db
export const getUserByIdFromDb = async (payload: string): Promise<IUser | null> => {
    const user = await User.findOne({ id: payload }, { name: 1, contactNo: 1, email: 1, _id: 0 });  // fill filtering -> 1 means I want, 0 means I don't want
    return user;
}

