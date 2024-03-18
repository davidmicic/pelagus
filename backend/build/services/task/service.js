"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.addNewTask = exports.getTaskById = exports.getAllTasks = void 0;
async function getAllTasks(db) {
    const tasks = await db.getAllTasks();
    return tasks;
}
exports.getAllTasks = getAllTasks;
async function getTaskById(db, id) {
    const task = await db.getTaskById(id);
    return task;
}
exports.getTaskById = getTaskById;
async function addNewTask(db, title, description) {
    await db.addNewTask(title, description);
}
exports.addNewTask = addNewTask;
async function updateTask(db, update) {
    await db.updateTask(update);
}
exports.updateTask = updateTask;
async function deleteTask(db, id) {
    await db.deleteTask(id);
}
exports.deleteTask = deleteTask;
