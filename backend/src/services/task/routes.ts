import { Router } from 'express';
import { IDatabase } from '../../database/database';
import * as fns from './fns';
import { auth } from '../../auth/auth';

export async function initTaskService(router: Router, db: IDatabase) {
    router.get("/", auth(), fns.get_all_tasks(db))
    router.get("/:id", auth(), fns.get_task_by_id(db))
    router.post("/", auth(), fns.add_new_task(db))
    router.put("/:id", auth(), fns.update_task(db))
    router.delete("/:id", auth(), fns.delete_task(db))
}