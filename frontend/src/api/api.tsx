import { Task } from "../types/Task"

const backend = "http://localhost:3000"
const tasks = "/tasks"
const users = "/users"

export async function getAllTasks(): Promise<Task[]> {
    const headers = getAuthorizationHeaders()

    const res = await get(backend + tasks, headers)
    return res.json()
}

export async function getTaskById(id: string): Promise<Task> {
    const headers = getAuthorizationHeaders()

    const res = await get(backend + tasks + "/" + id, headers)
    return res.json()
}

export async function addNewTask(task: Task): Promise<void> {
    await post_put_delete(tasks, "POST", {...task})
}

export async function updateTask(id: string, task: Task): Promise<void> {
    await post_put_delete(tasks + "/" + id, "PUT", {...task})
}

export async function deleteTask(id: string): Promise<void> {
    await post_put_delete(tasks + "/" + id, "DELETE")
}

export async function login(username: string, password: string): Promise<string> {
    const res = await post_put_delete(users + '/login', "POST", {username, password})
    return res.json()
}

async function get(url: string, headers: any): Promise<Response> {
    const res = await fetch(url, {headers})
    return res
}

async function post_put_delete(url: string, method: string, body?: any): Promise<Response> {
    let headers = {}
    const authHeaders = getAuthorizationHeaders()
    headers = {...headers, ...authHeaders}
    headers = {...headers, 'Content-Type': 'application/json'}

    const res = await fetch(backend + url, {
        method,
        body: JSON.stringify(body),
        headers
    })

    return res
}

function getAuthorizationHeaders(): any {
    return {'Authorization': localStorage.getItem("jwt")}
}