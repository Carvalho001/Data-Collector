import { connection } from "./dataBaseConnections/connection";

export const getAllPeopleInfoData = async () => {
    const result = await connection.raw(`SELECT id, firstName, lastName, participation FROM cuboInformationTable;`)
    return result[0]

}
