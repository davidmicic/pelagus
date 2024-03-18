import { useEffect } from "react"
import Input from "../ui/Input"
import TextArea from "../ui/TextArea"
import { useNavigate, useParams } from "react-router-dom"
import * as api from "../../api/api"
import Button from "../ui/Button"
import Container from "../ui/Container"
import { useForm } from "../hooks/useForm"
import Logout from "../auth/Logout"

const AddTask = () => {
    const navigate = useNavigate();
    const {
        form,
        setForm,
        onInputChange
      } = useForm({title: "", description: ""})


    const { id } = useParams();

    useEffect(() => {
        if (id) {
            (async () => {
                const task = await api.getTaskById(id)
                setForm(task)
            })()
        }
    }, [])

    const onReturnButtonHandler = () => {
        navigateToAddTaskPage()
    }

    const onAddButtonHandler = async () => {
        await api.addNewTask({description: form.description, title: form.title})
        navigateToAddTaskPage()
    }

    const onUpdateButtonHandler = async () => {
        await api.updateTask(id!, {description: form.description, title: form.title})
        navigateToAddTaskPage()
    }

    const navigateToAddTaskPage = () => {
        navigate('/')
    }

    return (
        <Container
            header={
                <div className="flex flex-row justify-between">
                <div className="min-w-0 flex-1">
                    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                    Add new task
                    </h2>
                </div>
                <div>
                    <Logout />
                </div>
            </div>
            }
            body={
                <div className="w-4/12">
                    <Input name={"title"} type={"text"} id={"title"} label="Title" value={form.title} onChange={onInputChange} />
                    <TextArea name={"description"} type={"text"} id={"description"} label="Description" value={form.description} onChange={onInputChange} />
                </div>
            }
            footer={
                <div className="flex flex-row justify-between">
                {
                    id ? 
                        <Button 
                            label="Update task"
                            onClickHandler={onUpdateButtonHandler}
                        />
                    :
                        <Button 
                            label="Add task"
                            onClickHandler={onAddButtonHandler}
                        />
                }
                    
                        <Button 
                            label="Return to all tasks"
                            onClickHandler={onReturnButtonHandler}
                        />
            </div>
            }
        />
    )
}

export default AddTask