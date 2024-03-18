"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unauthorized = exports.forbidden = exports.bad_request = exports.internal_server_error = void 0;
function internal_server_error(res, e) {
    res.status(500).json({
        message: e.message
    });
}
exports.internal_server_error = internal_server_error;
function bad_request(res) {
    res.sendStatus(400);
}
exports.bad_request = bad_request;
function forbidden(res) {
    res.sendStatus(403);
}
exports.forbidden = forbidden;
function unauthorized(res) {
    res.setHeader("WWW-Authenticate", "-");
    res.sendStatus(401);
}
exports.unauthorized = unauthorized;
