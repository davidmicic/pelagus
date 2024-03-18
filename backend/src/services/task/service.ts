import { IDatabase } from "../../database/database"
import { Task } from "../../database/entities/Task";

export async function getAllTasks(db: IDatabase): Promise<Task[]> {
    const tasks = await db.getAllTasks();
    return tasks
}

export async function getTaskById(db: IDatabase, id: number): Promise<Task> {
    const task = await db.getTaskById(id);
    return task
}

export async function addNewTask(db: IDatabase, title: string, description: string): Promise<void> {
    await db.addNewTask(title, description);
}

export async function updateTask(db: IDatabase, update: Task): Promise<void> {
    await db.updateTask(update);
}

export async function deleteTask(db: IDatabase, id: number): Promise<void> {
    await db.deleteTask(id);
}

