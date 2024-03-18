"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllTasks = void 0;
const controller = require("./service");
const errors = require("../../responses/errors");
const responses = require("../../responses/responses");
function getAllTasks(db) {
    return async function (req, res) {
        const tasks = controller.getAllTasks(db);
        try {
            if (tasks) {
                responses.ok_with_payload(res, tasks);
            }
            responses.ok(res);
        }
        catch (e) {
            errors.internal_server_error(res, e);
        }
    };
}
exports.getAllTasks = getAllTasks;
