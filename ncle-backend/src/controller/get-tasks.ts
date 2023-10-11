import { Request, Response } from "express";
import { readData } from "../services/read-write-data";
import { TaskType } from "../types/task";

export default function getTasks(req: Request, res: Response) {
    try {
        const { assignedTo, category, page: pageNumber, itemsPerPage } = req.query;

        const page = pageNumber ? parseInt(pageNumber as string) : 1;
        const limit = itemsPerPage ? parseInt(itemsPerPage as string) : 5;

        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;

        const allTasks = readData();

        let tasks;
        if (assignedTo) {
            tasks = allTasks.filter((task: TaskType) => task.assign_to === assignedTo);
        } else if (category) {
            tasks = allTasks.filter((task: TaskType) => task.category === category);
        } else {
            tasks = allTasks;
        }

        const tasksForPage = tasks.slice(startIndex, endIndex);

        return res.status(200).json({
            currentPage: page,
            itemsPerPage,
            totalItems: tasks.length,
            totalPages: Math.ceil(tasks.length / limit),
            tasks: tasksForPage,
        });

    } catch (error) {
        console.log(error);
    }
}