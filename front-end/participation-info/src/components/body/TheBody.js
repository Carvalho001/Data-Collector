import React from "react";
import { GeralBody, InfoIntroduction, StyledBodyTitle, BodyBox } from "../../styles";
import TheTable from "./TheTable";
import TheChart from "./TheChart";


function TheBody() {


    return (

        <GeralBody>
            <InfoIntroduction>
                <StyledBodyTitle>Data</StyledBodyTitle>
                <p>Information of employees participation in business</p>
            </InfoIntroduction>
            <BodyBox>
                <TheTable></TheTable>
                <TheChart></TheChart>
            </BodyBox>
        </GeralBody>
    )
}
export default TheBody