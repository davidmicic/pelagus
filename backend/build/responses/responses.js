"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ok_with_payload = exports.ok = void 0;
function ok(res) {
    res.send();
}
exports.ok = ok;
function ok_with_payload(res, payload) {
    res.status(200).json(payload);
}
exports.ok_with_payload = ok_with_payload;
