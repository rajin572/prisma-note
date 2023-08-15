import { Request, Response } from "express";
import { categoryServices } from "./category.services";

const insertCategoryIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await categoryServices.insertCategoryIntoDB(req.body);

    res.send({
      success: true,
      message: "Create Category Successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllCategories = async (req: Request, res: Response) => {
  try {
    const result = await categoryServices.getAllCategories();

    res.send({
      success: true,
      message: "Get All Categories",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleCategories = async (req: Request, res: Response) => {
  try {
    const result = await categoryServices.getSingleCategories(
      parseInt(req.params.id)
    );

    res.send({
      success: true,
      message: "Get Category",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const categoryController = {
  insertCategoryIntoDB,
  getAllCategories,
  getSingleCategories,
};
