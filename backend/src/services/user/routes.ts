import { Router } from 'express';
import { IDatabase } from '../../database/database';
import * as fns from './fns';

export async function initUserService(router: Router, db: IDatabase) { 
    router.post("/login", fns.login(db))
}