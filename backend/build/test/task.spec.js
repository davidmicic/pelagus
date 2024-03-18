"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const mocha_1 = require("mocha");
const controller = require("../services/task/service");
(0, mocha_1.describe)("Tasks", function () {
    (0, mocha_1.it)("Get all tasks", async function () {
        const tasks = [{
                id: 1,
                title: "first task title",
                description: "first task description"
            }, {
                id: 2,
                title: "second task title",
                description: "second task description"
            }];
        const mock_db = {
            getAllTasks: async function () {
                return tasks;
            },
            addNewTask: function (title, description) {
                throw new Error("Function not implemented.");
            },
            updateTask: function (update) {
                throw new Error("Function not implemented.");
            },
            deleteTask: function (id) {
                throw new Error("Function not implemented.");
            },
            getTaskById: function (id) {
                throw new Error("Function not implemented.");
            },
            getUserByUsernamePass: function (username, password) {
                throw new Error("Function not implemented.");
            }
        };
        const all_tasks_from_db = await controller.getAllTasks(mock_db);
        (0, chai_1.expect)(all_tasks_from_db).to.deep.equal(tasks);
    });
});
