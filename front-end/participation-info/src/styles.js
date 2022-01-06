import styled from "styled-components";


export const HeadersFather = styled.div`
height:20vh;
background-color:#87cefa;
@media screen and (min-device-width:320px) and (max-device-width:480px){
    height:33vh;
    width:100%;
}
`
export const HeaderChild = styled.form`
display:flex;
justify-content:center;
justify-content: space-evenly;
padding-top:30px ;
@media screen and (min-device-width:320px) and (max-device-width:480px){
    display:flex;
    flex-direction:column;
    width:99vw;
    align-items: center;
    text-align:center;
    }
`
export const StyledInput = styled.input`
height:6vh;
width:20vw;
border:0;

@media screen and (min-device-width:320px) and (max-device-width:480px){
height:5vh;
text-align:center;
font-size:2.60vh;
width:80vw;
}
`
export const StyledFormButton = styled.button`
&:hover{
    cursor:pointer

};
background-color:#87cefa;
color: #FFFFFF;
border:solid #FFFFFF 1px;


@media screen and (min-device-width:320px) and (max-device-width:480px){
width:50vw;
height:5vh;
font-size:2.60vh;
text-align:center;
margin-top:1.75vh;
}
`



export const GeralBody = styled.div`
@media screen and (min-device-width:320px) and (max-device-width:480px){
}
`


export const InfoIntroduction = styled.div`
display:flex;
align-items: center;
flex-direction: column;
@media screen and (min-device-width:320px) and (max-device-width:480px){
    display:flex;
align-items: center;
flex-direction: column;
font-size:2.30vh;
}
`

export const StyledBodyTitle = styled.h1`
text-align:center;
@media screen and (min-device-width:320px) and (max-device-width:480px){
font-size:3vh;
text-align:center;
}
`
export const StyledTableSection = styled.section`
padding-top:3vh;
`

export const StyledHeaderTable = styled.th`
border:solid black 1px;
width:15.55vw;
@media screen and (min-device-width:320px) and (max-device-width:480px){
width:30vw;
height:5vh;
font-size:13.75px;
padding:3%;
}
`

export const StyledDataTable = styled.td`
border:solid black 1px;
width:15vw;
@media screen and (min-device-width:320px) and (max-device-width:480px){
width: 28.85vw;
height:4vh;
font-size:12px;
}
`


export const StyledChartSection = styled.section`
@media screen and (min-device-width:320px) and (max-device-width:480px){
margin-top:5vh;
padding-left:10vw;
}
`

export const BodyBox = styled.div`
margin:3vh 0 3vh 0;
display:flex;
flex-direction:row;
justify-content:center;
justify-content:space-evenly;
@media screen and (min-device-width:320px) and (max-device-width:480px){
display:flex;
flex-direction:column;
justify-content:center;
align-items:center
}
`