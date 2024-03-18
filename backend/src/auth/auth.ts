import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import * as errors from "../responses/errors"

export type AuthenticationFunction = (req: Request, res: Response, next: NextFunction) => Promise<void>;

export function auth(): AuthenticationFunction {
    return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const authHeader = req.headers.authorization;
        if (authHeader) {
            const token = authHeader;
            
            jwt.verify(token, "secret", {ignoreExpiration: false}, async (err): Promise<void> => {
                if (err) {
                    console.log(err)
                    errors.forbidden(res)
                    return
                }

                next();
            });
        } else {
            errors.unauthorized(res)
        }
    }
}