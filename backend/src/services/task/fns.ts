import { Request, Response, NextFunction } from 'express';
import * as controller from "./service"
import * as errors from "../../responses/errors"
import { IDatabase } from '../../database/database';
import * as responses from '../../responses/responses';
import { Task } from '../../database/entities/Task';

type ExpressRouteFunc = (req: Request, res: Response, next?: NextFunction) => void | Promise<void>;

export function getAllTasks(db: IDatabase): ExpressRouteFunc {
    return async function(req: Request, res: Response) {
        try {
            const tasks = await controller.getAllTasks(db);
            if (tasks) {
                responses.okWithPayload(res, tasks)
                return
            }
            responses.ok(res)
        } catch(e) {
            errors.internalServerError(res, e)
        }
    }
}

export function getTaskById(db: IDatabase): ExpressRouteFunc {
    return async function(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)
            if (!id) {
                errors.badRequest(res)
                return
            }

            const task = await controller.getTaskById(db, id);
            if (task) {
                responses.okWithPayload(res, task)
                return
            }
            responses.ok(res)
        } catch(e) {
            errors.internalServerError(res, e)
        }
    }
}

export function addNewTask(db: IDatabase): ExpressRouteFunc {
    return async function(req: Request, res: Response) {
        try {
            const description = req.body.description
            const title = req.body.title
            if (!description || !title) {
                errors.badRequest(res)
                return
            }

            await controller.addNewTask(db, title, description)

            responses.ok(res)
        } catch(e: any) {
            if (e instanceof Error) {
                errors.internalServerError(res, e)
            }
        }
    }
}

export function updateTask(db: IDatabase): ExpressRouteFunc {
    return async function(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)
            if (!id) {
                errors.badRequest(res)
                return
            }

            const description = req.body.description
            const title = req.body.title
            if (!description || !title) {
                errors.badRequest(res)
                return
            }

            const update: Task = {id, title, description}

            await controller.updateTask(db, update)
            responses.ok(res)
        } catch(e: any) {
            if (e instanceof Error) {
                errors.internalServerError(res, e)
            }
        }
    }
}

export function deleteTask(db: IDatabase): ExpressRouteFunc {
    return async function(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)

            if (!id) {
                errors.badRequest(res)
                return
            }

            await controller.deleteTask(db, id)
            responses.ok(res)
        } catch(e: any) {
            if (e instanceof Error) {
                errors.internalServerError(res, e)
            }
        }
    }
}