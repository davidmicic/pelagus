"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PG = void 0;
const typeorm_1 = require("typeorm");
const Task_1 = require("./entities/Task");
class PG {
    constructor() {
        this.app_data_source = new typeorm_1.DataSource({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "root",
            password: "mysecretpassword",
            database: "pelagus",
            synchronize: true,
            logging: true,
            entities: [Task_1.Task],
            subscribers: [],
            migrations: [],
        });
    }
}
exports.PG = PG;
