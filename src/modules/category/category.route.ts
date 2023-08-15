import express from "express";
import { categoryController } from "./category.controller";

const route = express.Router();

route.get("/", categoryController.getAllCategories);
route.get("/:id", categoryController.getSingleCategories);
route.post("/create-category", categoryController.insertCategoryIntoDB);

export const CategoryRoutes = route;
