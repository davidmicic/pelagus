"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initUserService = void 0;
const fns = require("./fns");
async function initUserService(router, db) {
    router.post("/login", fns.login(db));
}
exports.initUserService = initUserService;
