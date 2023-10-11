import { Router } from 'express';
import { taskModel } from "../model/model";
import zodValidation from "../middleware/zod-validation";
import getTask from "../controller/get-task";
import createTask from "../controller/create-task";
import updateTask from "../controller/update.task";
import deleteTask from "../controller/delete-task";

const taskRouter = Router();

taskRouter.get("/:id", getTask);
taskRouter.post("/", zodValidation(taskModel, "body"), createTask);
taskRouter.put("/:id", updateTask);
taskRouter.delete("/:id", deleteTask);

export default taskRouter;
