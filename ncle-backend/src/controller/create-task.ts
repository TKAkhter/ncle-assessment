import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { readData, writeData } from "../services/read-write-data";

export default function createTask(req: Request, res: Response) {
    try {
        const { title, due_date, assign_to, category, status } = req.body;

        const newTask = {
            id: uuidv4(),
            title: title,
            creation_date: new Date().toLocaleDateString(),
            due_date: due_date,
            assign_to: assign_to,
            category: category,
            status: status  
        };

        const data = readData();
        data.push(newTask);
        writeData(data);

        return res.status(200).json({message: 'Task Created', id: newTask.id });
    } catch (error) {
        console.log(error);
    }
}