import { connection } from "./dataBaseConnections/connection";


export const insertPeopleIntoinfoDbData = async (id: string, firstName: string, lastName: string, participation: number) => {
    await connection("cuboInformationTable").insert(
        {
            id,
            firstName,
            lastName,
            participation
        })
}