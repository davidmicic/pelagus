"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.addNewTask = exports.getTaskById = exports.getAllTasks = void 0;
const controller = require("./service");
const errors = require("../../responses/errors");
const responses = require("../../responses/responses");
function getAllTasks(db) {
    return async function (req, res) {
        try {
            const tasks = await controller.getAllTasks(db);
            if (tasks) {
                responses.ok_with_payload(res, tasks);
                return;
            }
            responses.ok(res);
        }
        catch (e) {
            errors.internal_server_error(res, e);
        }
    };
}
exports.getAllTasks = getAllTasks;
function getTaskById(db) {
    return async function (req, res) {
        try {
            const id = Number(req.params.id);
            if (!id) {
                errors.bad_request(res);
                return;
            }
            const task = await controller.getTaskById(db, id);
            if (task) {
                responses.ok_with_payload(res, task);
                return;
            }
            responses.ok(res);
        }
        catch (e) {
            errors.internal_server_error(res, e);
        }
    };
}
exports.getTaskById = getTaskById;
function addNewTask(db) {
    return async function (req, res) {
        try {
            const description = req.body.description;
            const title = req.body.title;
            if (!description || !title) {
                errors.bad_request(res);
                return;
            }
            await controller.addNewTask(db, title, description);
            responses.ok(res);
        }
        catch (e) {
            if (e instanceof Error) {
                errors.internal_server_error(res, e);
            }
        }
    };
}
exports.addNewTask = addNewTask;
function updateTask(db) {
    return async function (req, res) {
        try {
            const id = Number(req.params.id);
            if (!id) {
                errors.bad_request(res);
                return;
            }
            const description = req.body.description;
            const title = req.body.title;
            if (!description || !title) {
                errors.bad_request(res);
                return;
            }
            const update = { id, title, description };
            await controller.updateTask(db, update);
            responses.ok(res);
        }
        catch (e) {
            if (e instanceof Error) {
                errors.internal_server_error(res, e);
            }
        }
    };
}
exports.updateTask = updateTask;
function deleteTask(db) {
    return async function (req, res) {
        try {
            const id = Number(req.params.id);
            if (!id) {
                errors.bad_request(res);
                return;
            }
            await controller.deleteTask(db, id);
            responses.ok(res);
        }
        catch (e) {
            if (e instanceof Error) {
                errors.internal_server_error(res, e);
            }
        }
    };
}
exports.deleteTask = deleteTask;
