import * as pg from "pg";

export interface IPgHelper {
    query(sql: string, params?: any): Promise<any[]>
}

export class PgHelper implements IPgHelper {
    private db: pg.Pool
    constructor(pool: pg.Pool) {
        this.db = pool
    }

    public async query(sql: string, params?: any) {
        const res = await this.db.query(sql, params || []);
        return res.rows;
    }
}