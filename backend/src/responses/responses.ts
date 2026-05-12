import { Response } from 'express';

export function ok(res: Response) {
    res.send()
}

export function ok_with_payload(res: Response, payload: any) {
    res.status(200).json(payload)
}