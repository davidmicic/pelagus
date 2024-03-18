import { IDatabase } from "../../database/database"
import * as jwt from "jsonwebtoken";

export async function login(db: IDatabase, username: string, password: string): Promise<string> {
    const user = await db.getUserByUsernamePass(username, password)
    if (user) {
        const token = generateJWT({
            id: user.id,
            username: user.username
        }, true);
        return token;
    }

    return null
}


function generateJWT(payload: any, should_expire = false): string {
    const opts: jwt.SignOptions = {}
    if (should_expire) {
        opts.expiresIn = 30 * 60;
    } 
    const token = jwt.sign(payload, "secret", opts);
    return token
}