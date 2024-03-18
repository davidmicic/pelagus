import { Task } from "./entities/Task";
import { User } from "./entities/User";

export interface IDatabase {
    getAllTasks(): Promise<Task[]>
    addNewTask(title: string, description: string): Promise<void>
    updateTask(update: Task): Promise<void>
    deleteTask(id: number): Promise<void>
    getTaskById(id: number): Promise<Task>
    getUserByUsernamePass(username: string, password: string): Promise<User>
}