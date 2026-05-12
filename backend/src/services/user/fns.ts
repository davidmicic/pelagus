import { Request, Response, NextFunction } from 'express';
import * as controller from "./service"
import * as errors from "../../responses/errors"
import { IDatabase } from '../../database/database';
import * as responses from '../../responses/responses';

type ExpressRouteFunc = (req: Request, res: Response, next?: NextFunction) => void | Promise<void>;

export function login(db: IDatabase): ExpressRouteFunc {
    return async function(req: Request, res: Response) {
        try {
            const username = req.body.username
            const password = req.body.password
            if (!username || !password) {
                errors.bad_request(res)
                return
            }

            const jwt = await controller.login(db, username, password);
            if (jwt) {
                responses.ok_with_payload(res, jwt)
                return
            }

            errors.forbidden(res)
        } catch(e) {
            errors.internal_server_error(res, e)
        }
    }
}