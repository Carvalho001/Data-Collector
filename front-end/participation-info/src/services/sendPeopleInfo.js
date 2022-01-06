import { URL_BASE } from "../constants/url";
import axios from "axios";

export const sendPeopleInfo = (form, clear) => {
    const url = `${URL_BASE}/info`

    axios.post(url, {
        firstName: form.firstName,
        lastName: form.lastName,
        participation: form.participation
    })
    .then((response
        ) => {
            console.log(response)
        clear()
        alert("People Info was send")
    })
    .catch((error) => {
        console.log(error.response)
    })
}