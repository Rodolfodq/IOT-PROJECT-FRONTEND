import React from 'react';

import {FaLock, FaLockOpen} from 'react-icons/fa'
import {BsFillShieldLockFill} from "react-icons/bs";
import { Container, Form, SubmitButton } from './styles'

function Login(){
    return(
    <Container>
        <h1>
            <BsFillShieldLockFill color="#000" size={50}/>
            LOGIN
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

        <SubmitButton>
            ENTRAR
        </SubmitButton>
        <SubmitButton>
            REGISTRAR
        </SubmitButton>
    </Container>
    );

};

export default Login
