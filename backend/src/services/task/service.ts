import { IDatabase } from "../../database/database"
import { Task } from "../../database/entities/Task";

export async function get_all_tasks(db: IDatabase): Promise<Task[]> {
    const tasks = await db.get_all_tasks();
    return tasks
}

export async function get_task_by_id(db: IDatabase, id: number): Promise<Task> {
    const task = await db.get_task_by_id(id);
    return task
}

export async function add_new_task(db: IDatabase, title: string, description: string): Promise<void> {
    await db.add_new_task(title, description);
}

export async function update_task(db: IDatabase, update: Task): Promise<void> {
    await db.update_task(update);
}

export async function delete_task(db: IDatabase, id: number): Promise<void> {
    await db.delete_task(id);
}

