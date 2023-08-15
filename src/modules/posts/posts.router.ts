import express from "express";
import { PostController } from "./posts.controller";

const route = express.Router();

route.get("/", PostController.getAllPosts);
route.get("/:id", PostController.getSinglePost);
route.post("/create-post", PostController.createPost);

export const PostRouter = route;
