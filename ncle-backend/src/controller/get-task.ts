import { Request, Response } from "express";
import { readData } from "../services/read-write-data";
import { TaskType } from "../types/task";

export default function getTask(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const data = readData();
        const task = data.find((task:TaskType) => task.id === id);
        return res.status(200).json(task);
    } catch (error) {
        console.log(error);
    }
}