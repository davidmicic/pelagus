"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.internal_server_error = void 0;
function internal_server_error(res, e) {
    res.status(500).json({ error: e });
}
exports.internal_server_error = internal_server_error;
