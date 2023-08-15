import express from "express";
import { UserController } from "./users.controller";

const route = express.Router();

route.get("/", UserController.getuser);
route.get("/:id", UserController.getSingleuser);
route.get("/profile", UserController.getProfile);
route.get("/profile/:id", UserController.getSingleProfile);
route.post("/create-user", UserController.insertIntoDB);
route.post("/profile", UserController.insertOrUpdateProfile);

export const UserRoutes = route;
