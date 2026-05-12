import { Response } from 'express';

export function internalServerError(res: Response, e: Error) {
    res.status(500).json({
        message: e.message
    })
}

export function badRequest(res: Response) {
    res.sendStatus(400)
}

export function forbidden(res: Response) {
    res.sendStatus(403)
}

export function unauthorized(res: Response) {
    res.setHeader("WWW-Authenticate", "-");
    res.sendStatus(401)
}