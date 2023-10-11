import { Request, Response } from "express";
import { readData, writeData } from "../services/read-write-data";
import { TaskType } from "../types/task";

export default function updateTask(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const data = readData();
        const taskIndex = data.findIndex((task: TaskType) => task.id === id);

        if (taskIndex !== -1) {
            data[taskIndex] = {
                ...data[taskIndex],
                ...req.body,
            };
        } else {
            return res.status(404).json({ message: 'Task not found' });
        }

        writeData(data);

        return res.status(200).json({ message: 'Task updated successfully', data: data[taskIndex] });
    } catch (error) {
        console.log(error);
    }
}