import { Router } from 'express';
import { IDatabase } from '../../database/database';
import * as fns from './fns';
import { auth } from '../../auth/auth';

export async function initTaskService(router: Router, db: IDatabase) { 
    router.get("/", auth(), fns.getAllTasks(db))
    router.get("/:id", auth(), fns.getTaskById(db))
    router.post("/", auth(), fns.addNewTask(db))
    router.put("/:id", auth(), fns.updateTask(db))
    router.delete("/:id", auth(), fns.deleteTask(db))
}