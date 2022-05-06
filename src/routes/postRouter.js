import { Router } from "express";
import postController from "../app/controller/PostController.js";

const route = Router();

route.get('/', postController.getPost);

export default route;