"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const jwt = require("jsonwebtoken");
async function login(db, username, password) {
    const user = await db.getUserByUsernamePass(username, password);
    if (user) {
        const token = generateJWT({
            id: user.id,
            username: user.username
        }, true);
        return token;
    }
    return null;
}
exports.login = login;
function generateJWT(payload, should_expire = false) {
    const opts = {};
    if (should_expire) {
        opts.expiresIn = 30 * 60;
    }
    const token = jwt.sign(payload, "secret", opts);
    return token;
}
