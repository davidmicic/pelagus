"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pg = void 0;
const pg_1 = require("pg");
const helper_1 = require("./helper");
class Pg {
    constructor(connection_string) {
        this.db = new helper_1.PgHelper(new pg_1.Pool({
            connectionString: connection_string
        }));
    }
    async getUserByUsernamePass(username, password) {
        const sql = "SELECT * FROM public.User WHERE username = $1 and password = $2";
        const user = await this.db.query(sql, [username, password]);
        return user[0];
    }
    async deleteTask(id) {
        const sql = "DELETE FROM Task WHERE id = $1";
        await this.db.query(sql, [id]);
    }
    async updateTask(update) {
        const task = await this.getTaskById(update.id);
        if (!task) {
            throw new Error(`Task with id: ${update.id} does not exist!`);
        }
        if (update.title) {
            task.title = update.title;
        }
        if (update.description) {
            task.description = update.description;
        }
        const sql = "UPDATE Task SET title = $1, description = $2 WHERE id = $3";
        await this.db.query(sql, [task.title, task.description, task.id]);
    }
    async getTaskById(id) {
        const sql = "SELECT * FROM Task WHERE id = $1";
        const task = await this.db.query(sql, [id]);
        return task[0];
    }
    async addNewTask(title, description) {
        const sql = "INSERT INTO Task (title, description) VALUES ($1, $2)";
        await this.db.query(sql, [title, description]);
    }
    async getAllTasks() {
        const sql = "SELECT * FROM Task";
        const tasks = await this.db.query(sql);
        return tasks;
    }
}
exports.Pg = Pg;
