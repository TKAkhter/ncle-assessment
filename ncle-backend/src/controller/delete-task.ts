import { Request, Response } from "express";
import { readData, writeData } from "../services/read-write-data";
import { TaskType } from "../types/task";

export default function updateTask(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const data = readData();
        const taskIndex = data.findIndex((task: TaskType) => task.id === id);

        if (taskIndex !== -1) {
          data.splice(taskIndex, 1);
        } else {
          return res.status(404).json({ error: 'Task not found' });
        }
        
        writeData(data);
        
        return res.status(200).json({ message: 'Task deleted successfully' });;
    } catch (error) {
        console.log(error);
    }
}