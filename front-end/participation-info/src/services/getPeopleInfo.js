import { URL_BASE } from "../constants/url";
import axios from "axios";

export const getPeopleInfo = (setPeopleInfo) => {
    const url = `${URL_BASE}/info`
    try {
        axios.get(url).then((response) => {
            setPeopleInfo(response.data.result)
        })
    } catch (error) {
        console.log(error, "error")
    }

}