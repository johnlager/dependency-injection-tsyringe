import "reflect-metadata";
import "./shared/DependenciesContainer";
import { router } from "./routes/HelloWorld.routes";
import express from "express";

const app = express();

app.use(express.json());
app.use(router);

app.listen(3000, () => console.log("App is running"));