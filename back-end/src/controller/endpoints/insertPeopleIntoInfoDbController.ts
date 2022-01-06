import { Request, Response } from "express";
import { insertPeopleIntoinfoDbData } from "../../data/insertPeopleIntoinfoDbData";
import { generateId } from "../../services/idGenerator";


export const insertPeopleIntoInfoDbController = async (req: Request, res: Response) => {
    try {

        const peopleInfo = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            participation: req.body.participation
        }

        const id = generateId();

        await insertPeopleIntoinfoDbData(id, peopleInfo.firstName, peopleInfo.lastName, peopleInfo.participation);

        if (!peopleInfo.firstName || !peopleInfo.lastName || !peopleInfo.participation) {
            res.statusCode = 404
            throw new Error("Invalid Body")
        } else {
            res.status(200).send("People Info Added")
        }

    } catch (error: any) {
        res.status(500).send({ message: error.message || error.sqlMessage })
    }
}