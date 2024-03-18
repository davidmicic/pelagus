import { useEffect, useState } from "react"
import * as api from "../../api/api"
import { Task } from "../../types/Task"
import { Trash } from "../icons/Trash"
import { Edit } from "../icons/Edit"
import { useNavigate } from "react-router-dom"
import Button from "../ui/Button"
import Container from "../ui/Container"
import Logout from "../auth/Logout"
import Error from "../errors/Error"

const Tasks = () => {
    const navigate = useNavigate();
    const [tasks, setTasks] = useState<Task[]>([])
    const [errorMessage, setErrorMessage] = useState<string>("")

    useEffect(() => {
        (async () => {
            try {
                const tasks = await api.getAllTasks()
    
                if (tasks) {
                    setTasks(tasks)
                }
            } catch (e: any) {
                setErrorMessage(e.message)
            }
        })()
    }, [])

    const onAddTaskButtonHandler = () => {
        navigate('/add')
    }


    const onEditTaskButtonHandler = (id: number) => {
        navigate('/add/' + id)
    }

    const onDeleteTaskButtonHandler = async (id: number) => {
        await api.deleteTask(id.toString())
        window.location.reload();
    }

    return (
        <Container
            header={
                <div className="flex flex-row justify-between">
                    <div className="min-w-0 flex-1">
                        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                        All tasks
                        </h2>
                    </div>
                    <div>
                        <Logout />
                    </div>
                </div>
            }
            body={
                <>
                    {errorMessage != '' && <Error message={errorMessage}/>}
                    {   
                        tasks.length > 0 ?
                            <table className="w-full table-fixed divide-y divide-gray-300">
                                <thead>
                                    <tr>
                                        <th className="w-3/12 px-3 py-3.5 text-left text-sm font-semibold text-primary">Title</th>
                                        <th className="w-8/12 px-3 py-3.5 text-left text-sm font-semibold text-primary">Description</th>
                                        <th className="w-1/12 px-3 py-3.5 text-left text-sm font-semibold text-primary">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        tasks.map((el, idx) => {
                                            return (
                                                <>
                                                    <tr key={idx}>
                                                        <td className="w-full px-3 py-4 text-sm text-black-500" >{el.title}</td>
                                                        <td className="w-full px-3 py-4 text-sm text-black-500 break-words" >
                                                                {el.description}
                                                        </td>
                                                        <td className="w-full px-3 py-4 text-sm text-black-500 flex flex-row text-right">
                                                            <Edit onEditTaskButtonHandler={() => onEditTaskButtonHandler(el.id!)} />
                                                            <Trash onDeleteTaskButtonHandler={() => onDeleteTaskButtonHandler(el.id!)}/>
                                                        </td>
                                                    </tr>
                                                </>
                                            )
                                        })
                                    }
                                </tbody>
                        </table> : <></>
                    } 
                </>
            }
            footer={
                <Button
                    label=" Add new task"
                    onClickHandler={onAddTaskButtonHandler}
                />
            }
        />
    )
}

export default Tasks