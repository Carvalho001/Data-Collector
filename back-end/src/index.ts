import { app } from "./app";
import { AddressInfo } from "net";
import { getPeolpleInfoController } from "./controller/endpoints/getPeolpleInfoController";
import { insertPeopleIntoInfoDbController } from "./controller/endpoints/insertPeopleIntoInfoDbController";
import { getAllPeopleInfoController } from "./controller/endpoints/getAllPeopleInffoController";



//###############
//## ENDPOINTS ##
//###############

app.post("/info", insertPeopleIntoInfoDbController)
app.get("/info/:firstName", getPeolpleInfoController)
app.get("/info", getAllPeopleInfoController)
app.get("/", (req,res)=>{
    res.send("hello world, i'm working")
})

//###############
//## ENDPOINTS ##
//###############


export const server = app.listen(process.env.PORT || 3003, () => {
    const address = server.address() as AddressInfo
    if (server) {
        console.log(`Server is runing in http://localhost:${address.port}`)
    } else {
        console.log(`Error upon starting the server`)
    }
})