import { IDatabase } from "../database";
import { Task } from "../entities/Task";
import { Pool } from 'pg'
import { IPgHelper, PgHelper } from "./helper";
import { User } from "../entities/User";

export class Pg implements IDatabase {
    private db: IPgHelper
    constructor(connection_string: string) {
        this.db = new PgHelper(new Pool({
            connectionString: connection_string
        }))
    }

    async getUserByUsernamePass(username: string, password: string): Promise<User> {
        const sql = "SELECT * FROM public.User WHERE username = $1 and password = $2"
        const user: User[] = await this.db.query(sql, [username, password])

        return user[0]
    }

    async deleteTask(id: number): Promise<void> {
        const sql = "DELETE FROM Task WHERE id = $1";
        await this.db.query(sql, [id])
    }

    async updateTask(update: Task): Promise<void> {
        const task = await this.getTaskById(update.id);
        
        if (!task) {
            throw new Error(`Task with id: ${update.id} does not exist!`)
        }

        if (update.title) {
            task.title = update.title
        }

        if (update.description) {
            task.description = update.description
        }

        const sql = "UPDATE Task SET title = $1, description = $2 WHERE id = $3";
        await this.db.query(sql, [task.title, task.description, task.id])
    }

    async getTaskById(id: number): Promise<Task> {
        const sql = "SELECT * FROM Task WHERE id = $1"
        const task: Task[] = await this.db.query(sql, [id])

        return task[0]
    }
    
    async addNewTask(title: string, description: string): Promise<void> {
        const sql = "INSERT INTO Task (title, description) VALUES ($1, $2)";
        await this.db.query(sql, [title, description])
    }

    async getAllTasks(): Promise<Task[]> {
        const sql = "SELECT * FROM Task"
        const tasks: Task[] = await this.db.query(sql)
        return tasks
    }
}