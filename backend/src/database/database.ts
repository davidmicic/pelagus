import { Task } from "./entities/Task";
import { User } from "./entities/User";

export interface IDatabase {
    get_all_tasks(): Promise<Task[]>
    add_new_task(title: string, description: string): Promise<void>
    update_task(update: Task): Promise<void>
    delete_task(id: number): Promise<void>
    get_task_by_id(id: number): Promise<Task>
    get_user_by_username_pass(username: string, password: string): Promise<User>
}