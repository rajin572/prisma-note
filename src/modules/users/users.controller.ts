import { Request, Response } from "express";
import { UserServices } from "./users.services";

const insertIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.insertIntoDB(req.body);
    res.send({
      success: true,
      massage: "User Created",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const insertOrUpdateProfile = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.insertOrUpdateProfile(req.body);

    res.send({
      success: true,
      massage: "Profile Created",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};
const getuser = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getUser();

    res.send({
      success: true,
      massage: "Users Data Fetched Succcessfully",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};
const getSingleuser = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getSingleUser(parseInt(req.params.id));

    res.send({
      success: true,
      massage: "User Data Fetched Succcessfully",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const getProfile = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getProfile();

    res.send({
      success: true,
      massage: "Profile Data Fetched Succcessfully",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const getSingleProfile = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getSingleProfile(parseInt(req.params.id));

    res.send({
      success: true,
      massage: "Profile Data Fetched Succcessfully",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

export const UserController = {
  insertIntoDB,
  insertOrUpdateProfile,
  getuser,
  getSingleuser,
  getProfile,
  getSingleProfile,
};
