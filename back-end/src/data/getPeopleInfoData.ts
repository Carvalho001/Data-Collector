import { connection } from "./dataBaseConnections/connection";

export const getPeopleInfoData = async (firstName:string) => {
    const result = await connection("cuboInformationTable").
        select("*").
        where({firstName})

    return result
}