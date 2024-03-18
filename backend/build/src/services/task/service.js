"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllTasks = void 0;
function getAllTasks(db) {
    const tasks = db.getAllTasks();
    return tasks;
}
exports.getAllTasks = getAllTasks;
