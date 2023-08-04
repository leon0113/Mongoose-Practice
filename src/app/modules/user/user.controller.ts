import { NextFunction, Request, Response } from "express";
import { createUserToDb, getAdmins, getUserByIdFromDb, getUsersFromDb } from "./user.service";

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;
    const user = await createUserToDb(data);
    res.status(200).json({
        status: "success",
        data: user,
    });
};

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    const users = await getUsersFromDb();
    res.status(200).json({
        status: "success",
        data: users,
    });
    return users;
};

export const getUserById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    const users = await getUserByIdFromDb(id);
    res.status(200).json({
        status: "success",
        data: users,
    });
    return users;
};

export const getAllAdmins = async (req: Request, res: Response, next: NextFunction) => {
    const admin = await getAdmins();
    res.status(200).json({
        status: "success",
        data: admin,
    });
    return admin;
};


// Pattern
//!  route -> controller -> service