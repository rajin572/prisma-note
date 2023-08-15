import express, { Application } from "express";
import cors from "cors";
import { UserRoutes } from "./modules/users/users.router";
import { CategoryRoutes } from "./modules/category/category.route";
import { PostRouter } from "./modules/posts/posts.router";

const app: Application = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/users", UserRoutes);
app.use("/api/v1/category", CategoryRoutes);
app.use("/api/v1/post", PostRouter);

export default app;
