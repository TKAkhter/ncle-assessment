import { z } from "zod";

export const taskModel = z.object({
    title: z.string().min(1).trim(),
    description: z.string().min(1).trim(),
    due_date: z.string().min(1).trim(),
    assign_to: z.string().min(1).trim(),
    category: z.string().min(1).trim(),
    status: z.enum(["pending", "completed"])
});