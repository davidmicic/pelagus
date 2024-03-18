import { expect } from "chai"
import { describe, it } from "mocha"
import { IDatabase } from "../database/database"
import { Task } from "../database/entities/Task"
import { User } from "../database/entities/User"
import * as controller from "../services/task/service"

describe("Tasks", function () {
    it("Get all tasks", async function () {
        const tasks: Task[] = [{
            id: 1,
            title: "first task title",
            description: "first task description"
        }, {
            id: 2,
            title: "second task title",
            description: "second task description"
        }]

        const mock_db: IDatabase = {
            getAllTasks: async function (): Promise<Task[]> {
                return tasks
            },
            addNewTask: function (title: string, description: string): Promise<void> {
                throw new Error("Function not implemented.")
            },
            updateTask: function (update: Task): Promise<void> {
                throw new Error("Function not implemented.")
            },
            deleteTask: function (id: number): Promise<void> {
                throw new Error("Function not implemented.")
            },
            getTaskById: function (id: number): Promise<Task> {
                throw new Error("Function not implemented.")
            },
            getUserByUsernamePass: function (username: string, password: string): Promise<User> {
                throw new Error("Function not implemented.")
            }
        }

        const all_tasks_from_db = await controller.getAllTasks(mock_db)

        expect(all_tasks_from_db).to.deep.equal(tasks)
    })
})