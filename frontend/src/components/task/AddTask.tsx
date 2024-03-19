import { useEffect, useState } from "react"
import Input from "../ui/Input"
import TextArea from "../ui/TextArea"
import { useNavigate, useParams } from "react-router-dom"
import * as api from "../../api/api"
import Button from "../ui/Button"
import Container from "../ui/Container"
import { useForm } from "../hooks/useForm"
import Logout from "../auth/Logout"
import Error from "../errors/Error"

const AddTask = () => {
    const navigate = useNavigate();
    const {
        form,
        setForm,
        onInputChange
      } = useForm({title: "", description: ""})
      const [errorMessage, setErrorMessage] = useState<string>("")


    const { id } = useParams();

    useEffect(() => {
        try {
            if (id) {
                (async () => {
                    const task = await api.getTaskById(id)
                    setForm(task)
                })()
            }
        } catch (e: any) {
            setErrorMessage(e.message)
        }
    }, [])

    const onReturnButtonHandler = () => {
        navigateToAddTaskPage()
    }

    const onAddButtonHandler = async () => {
        try {
            await api.addNewTask({description: form.description, title: form.title})
            navigateToAddTaskPage()
        } catch (e: any) {
            console.log(e)
            setErrorMessage(e.message)
        }
    }

    const onUpdateButtonHandler = async () => {
        try {
            await api.updateTask(id!, {description: form.description, title: form.title})
            navigateToAddTaskPage()
        } catch (e: any) {
            setErrorMessage(e.message)
        }
    }

    const navigateToAddTaskPage = () => {
        navigate('/')
    }

    return (
        <Container
            header={
                <div className="flex flex-row justify-between">
                <div className="min-w-0 flex-1">
                    <h2 className="text-2xl font-bold leading-7 text-text sm:truncate sm:text-3xl sm:tracking-tight">
                    Add new task
                    </h2>
                </div>
                <div>
                    <Logout />
                </div>
            </div>
            }
            body={
                <div>
                    {errorMessage != '' && <Error message={errorMessage}/>}
                    <div className="flex flex-col items-center">
                        <div className="w-4/12">
                            <Input name={"title"} type={"text"} id={"title"} label="Title" value={form.title} onChange={onInputChange} />
                            <TextArea name={"description"} type={"text"} id={"description"} label="Description" value={form.description} onChange={onInputChange} />
                        </div>
                    </div>
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