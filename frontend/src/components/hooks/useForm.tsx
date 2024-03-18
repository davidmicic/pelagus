import { useState } from "react";

export const useForm = (initial_form: any) => {
    const [form, setForm] = useState(initial_form)

    const onInputChange = (name: string, value: string) => {
        setForm({...form, [name]: value})
    }

    return {form, setForm, onInputChange}
}