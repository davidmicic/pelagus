"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const express = require("express");
const pg_1 = require("./database/pg/pg");
const routes_1 = require("./services/task/routes");
function main() {
    const port = 3000;
    dotenv.config();
    const app = express();
    app.use(express.json());
    // Initialize database
    const db = new pg_1.Pg(`postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASS}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`);
    const task_router = express.Router();
    (0, routes_1.initTaskService)(task_router, db);
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        next();
    });
    app.use('/task', task_router);
    app.listen(port, () => {
        console.log(`Application is running on port ${port}.`);
    });
}
process.on('uncaughtException', error => {
    console.log(error);
    process.exit(1);
});
main();
