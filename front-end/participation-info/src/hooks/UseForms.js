import { useState } from "react";

const useForms = (initialState) => {

    const [form, setForm] = useState(initialState);

    const dealWithInputChange = (event) => {
        const { value, name } = event.target
        setForm({ ...form, [name]: value })
    }

    const clearInputs = () => {
        setForm(initialState)
    }

    return [form, dealWithInputChange, clearInputs]

}
export default useForms