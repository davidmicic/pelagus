"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const pg_1 = require("./database/pg/pg");
const routes_1 = require("./services/task/routes");
const routes_2 = require("./services/user/routes");
function main() {
    const port = 3000;
    // Import env variables
    dotenv.config();
    const app = express();
    app.use(express.json());
    app.use(cors());
    // Initialize database
    const db = new pg_1.Pg(`postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASS}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`);
    // Initialize API
    initApi(app, db);
    app.listen(port, () => {
        console.log(`Application is running on port ${port}.`);
    });
}
function initApi(app, db) {
    // Initialize task service 
    const task_router = express.Router();
    (0, routes_1.initTaskService)(task_router, db);
    // Initialize user service
    const user_router = express.Router();
    (0, routes_2.initUserService)(user_router, db);
    app.use('/tasks', task_router);
    app.use('/users', user_router);
}
process.on('uncaughtException', error => {
    console.log(error);
    process.exit(1);
});
main();
