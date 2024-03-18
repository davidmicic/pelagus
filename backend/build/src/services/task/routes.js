"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initTaskService = void 0;
const fns = require("./fns");
async function initTaskService(router, db) {
    router.get("/all", fns.getAllTasks(db));
}
exports.initTaskService = initTaskService;
