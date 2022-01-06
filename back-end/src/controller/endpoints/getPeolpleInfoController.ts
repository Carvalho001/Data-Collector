import { Request, Response } from "express";
import { getPeopleInfoData } from "../../data/getPeopleInfoData";


export const getPeolpleInfoController = async (req: Request, res: Response) => {
    try {

        const firstName = req.params.firstName

        const result = await getPeopleInfoData(firstName)

        if (!firstName) {
            res.statusCode = 404
            throw new Error("Invalid First Name")
        } else {
            res.status(200).send({ result })
        }

    } catch (error: any) {
        res.status(500).send({ message: error.message || error.sqlMessage })
    }
}
