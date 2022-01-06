import { useState } from "react";

export const usePeopleInfo = (initialState) => {
    const [peopleInfo, setPeopleInfo] = useState(initialState);

    return [peopleInfo, setPeopleInfo]
}