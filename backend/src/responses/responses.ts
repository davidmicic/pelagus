import { Response } from 'express';

export function ok(res: Response) {
    res.send()
}

export function okWithPayload(res: Response, payload: any) {
    res.status(200).json(payload)
}