import { Request, Response } from "express";
import { readData } from "../services/read-write-data";
import { TaskType } from "../types/task";

export default function getTasks(req: Request, res: Response) {
    try {
        const { assignedTo, category } = req.query;
        const data = readData();
        if (assignedTo) {
            const tasks = data.filter((task:TaskType) => task.assign_to === assignedTo);
            return res.status(200).json(tasks);
        }
        if (category) {
            const tasks = data.filter((task:TaskType) => task.category === category);
            return res.status(200).json(tasks);
        }
        
        return res.status(200).json(data);
    } catch (error) {
        console.log(error);
    }
}