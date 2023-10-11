import express from "express";
import compression from "compression";
import helmet from "helmet";
import { cors } from "./middleware/cors";
import logger from "morgan";
import path from "path";
import tasksRouter from "./routes/tasks";
import taskRouter from "./routes/task";

const app = express();

app.use(express.json());
app.use(cors);
app.use(helmet());

app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(compression());

app.use('/tasks', tasksRouter);
app.use('/task', taskRouter);


export default app;
