import { Request, Response } from "express";
import { PostServices } from "./posts.services";

const createPost = async (req: Request, res: Response) => {
  try {
    const result = await PostServices.createPost(req.body);

    res.send({
      success: true,
      message: "Post Created Successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const getAllPosts = async (req: Request, res: Response) => {
  try {
    const options = req.query;

    const result = await PostServices.getAllPost(options);

    res.send({
      success: true,
      message: "Post Created Successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const getSinglePost = async (req: Request, res: Response) => {
  try {
    const result = await PostServices.getSinglePost(parseInt(req.params.id));

    res.send({
      success: true,
      message: "Post Created Successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const PostController = {
  createPost,
  getAllPosts,
  getSinglePost,
};
