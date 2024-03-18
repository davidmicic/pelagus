"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const jwt = require("jsonwebtoken");
const errors = require("../responses/errors");
function auth() {
    return async (req, res, next) => {
        const authHeader = req.headers.authorization;
        if (authHeader) {
            const token = authHeader;
            jwt.verify(token, "secret", { ignoreExpiration: false }, async (err) => {
                if (err) {
                    console.log(err);
                    errors.forbidden(res);
                    return;
                }
                next();
            });
        }
        else {
            errors.unauthorized(res);
        }
    };
}
exports.auth = auth;
