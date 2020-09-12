import React from 'react';

import {BsFillPersonPlusFill} from "react-icons/bs";
import { Container, Form, SubmitButton } from './styles'

function Register(){
    return(
        <Container>
            <h1>
                <BsFillPersonPlusFill color="#000" size={50}/>
                REGISTRAR
            </h1>

            <Form onSubmit={() => {}}>
                <input
                    type = "text"
                    placeholder="E-MAIL"/>

            </Form>

            <Form onSubmit={() => {}}>
                <input
                    type = "password"
                    placeholder="SENHA"
                    />

            </Form>

            <Form onSubmit={() => {}}>
                <input
                    type = "password"
                    placeholder="CONFIRME A SENHA"
                    />

            </Form>

            <SubmitButton>
                REGISTRAR
            </SubmitButton>
            <SubmitButton>
                CANCELAR
            </SubmitButton>
        </Container>
        );
}

export default Register
