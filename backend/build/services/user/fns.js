"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const controller = require("./service");
const errors = require("../../responses/errors");
const responses = require("../../responses/responses");
function login(db) {
    return async function (req, res) {
        try {
            const username = req.body.username;
            const password = req.body.password;
            if (!username || !password) {
                errors.bad_request(res);
                return;
            }
            const jwt = await controller.login(db, username, password);
            if (jwt) {
                responses.ok_with_payload(res, jwt);
                return;
            }
            errors.forbidden(res);
        }
        catch (e) {
            errors.internal_server_error(res, e);
        }
    };
}
exports.login = login;
