import * as dotenv from 'dotenv';
import * as express from 'express';
import * as cors from 'cors';
import { Pg } from './database/pg/pg';
import { initTaskService } from './services/task/routes';
import { initUserService } from './services/user/routes';

function main () {
    const port = 3000;
    // Import env variables
    dotenv.config();

    const app = express();
    app.use(express.json());
    app.use(cors())

    // Initialize database
    const db = new Pg(`postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASS}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`)

    const task_router = express.Router();
    initTaskService(task_router, db)

    const user_router = express.Router();
    initUserService(user_router, db)

    app.use('/tasks', task_router);
    app.use('/users', user_router);

    app.listen(port, () => {
        console.log(`Application is running on port ${port}.`);
    });
}

process.on('uncaughtException', error => {
    console.log(error)
    process.exit(1)
});

main()