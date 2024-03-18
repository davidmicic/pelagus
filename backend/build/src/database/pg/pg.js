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
    async getAllTasks() {
        const tasks = await this.db.query("SELECT * FROM public.task");
        return tasks;
    }
}
exports.Pg = Pg;
