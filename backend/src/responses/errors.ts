import { Response } from 'express';

export function internal_server_error(res: Response, e: Error) {
    res.status(500).json({
        message: e.message
    })
}

export function bad_request(res: Response) {
    res.sendStatus(400)
}

export function forbidden(res: Response) {
    res.sendStatus(403)
}

export function unauthorized(res: Response) {
    res.setHeader("WWW-Authenticate", "-");
    res.sendStatus(401)
}