"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initTaskService = void 0;
const fns = require("./fns");
const auth_1 = require("../../auth/auth");
async function initTaskService(router, db) {
    router.get("/", (0, auth_1.auth)(), fns.getAllTasks(db));
    router.get("/:id", (0, auth_1.auth)(), fns.getTaskById(db));
    router.post("/", (0, auth_1.auth)(), fns.addNewTask(db));
    router.put("/:id", (0, auth_1.auth)(), fns.updateTask(db));
    router.delete("/:id", (0, auth_1.auth)(), fns.deleteTask(db));
}
exports.initTaskService = initTaskService;
