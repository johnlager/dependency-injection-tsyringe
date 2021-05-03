import express from "express";
import { HelloWorldController } from "../controllers/HelloWorldController";

const helloWorldController = new HelloWorldController();

const router = express.Router();

router.use("/", helloWorldController.handle);

export { router };