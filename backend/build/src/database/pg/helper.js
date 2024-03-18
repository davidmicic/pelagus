"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PgHelper = void 0;
class PgHelper {
    constructor(pool) {
        this.db = pool;
    }
    async query(sql, params) {
        const res = await this.db.query(sql, params || []);
        return res.rows;
    }
}
exports.PgHelper = PgHelper;
