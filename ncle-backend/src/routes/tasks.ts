import { Router } from 'express';
import getTasks from "../controller/get-tasks";


const tasksRouter = Router();

tasksRouter.get("/", getTasks);

export default tasksRouter;
