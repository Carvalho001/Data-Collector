import React, { useEffect } from "react";
import { usePeopleInfo } from "../../hooks/UsePeopleInfo";
import { getPeopleInfo } from "../../services/getPeopleInfo";
import { StyledTableSection, StyledHeaderTable, StyledDataTable } from "../../styles";

function TheTable() {

    const [peopleInfo, setPeopleInfo] = usePeopleInfo([{}])


    useEffect(() => {
        getPeopleInfo(setPeopleInfo)

    }, [peopleInfo])


    const renderPeopleInfo = peopleInfo.map((result) => {
        return (
            <table key={result.id}>
                <tbody>
                    <tr>
                        <StyledDataTable>{result.firstName}</StyledDataTable>
                        <StyledDataTable>{result.lastName}</StyledDataTable>
                        <StyledDataTable>{result.participation}</StyledDataTable>
                    </tr>
                </tbody>
            </table>
        )

    })

    return (
        <StyledTableSection>
            <thead>
                <StyledHeaderTable>First Name</StyledHeaderTable>
                <StyledHeaderTable>Last Name</StyledHeaderTable>
                <StyledHeaderTable>Participation</StyledHeaderTable>
            </thead>
            {renderPeopleInfo}
        </StyledTableSection>
    )
} export default TheTable