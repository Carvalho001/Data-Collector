import React from "react";
import useForms from "../../hooks/UseForms";
import { sendPeopleInfo } from "../../services/sendPeopleInfo";
import { HeadersFather, HeaderChild,StyledInput,StyledFormButton } from "../../styles";

function TheHeader() {

    const [form, onChange, clear] = useForms({
        firstName: "",
        lastName: "",
        participation: ""
    })


    const submitForm = (event) => {
        event.preventDefault()
        sendPeopleInfo(form, clear)
    }

    return (
        <HeadersFather>
            <HeaderChild onSubmit={submitForm}>
                <StyledInput type={'text'}
                    placeholder={'First Name'}
                    name={'firstName'}
                    value={form.firstName}
                    onChange={onChange}
                    required></StyledInput>
                <StyledInput type={'text'}
                    placeholder={'Last Name'}
                    name={'lastName'}
                    value={form.lastName}
                    onChange={onChange}
                    required></StyledInput>
                <StyledInput type={'number'}
                    placeholder={"Participation"}
                    name={'participation'}
                    value={form.participation}
                    onChange={onChange}
                    required></StyledInput>
                <StyledFormButton type={'submit'}>SEND</StyledFormButton>
            </HeaderChild>
        </HeadersFather>
    )
}
export default TheHeader;