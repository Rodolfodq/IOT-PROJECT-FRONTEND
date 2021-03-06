import React from 'react';

import {BsFillPersonPlusFill} from "react-icons/bs";
import { Container, Form, FieldsDiv } from './styles'

function Register(){
    return(
        <Container>
            <h1>
                <BsFillPersonPlusFill color="#000" size={50}/>
                REGISTRAR
            </h1>

            <FieldsDiv>
            <Form onSubmit={() => {}}>
                <ul>
                    <input
                        type = "text"
                        placeholder="E-MAIL"
                        autoFocus
                    />
                </ul>
                <br/>
                <ul>
                    <input
                        type = "password"
                        placeholder="SENHA"
                    />
                </ul>
                <br/>
                <ul>
                    <input
                        type = "password"
                        placeholder="CONFIRME A SENHA"
                    />
                </ul>

                <br/><br/>

                <button>
                    CONFIRMAR
                </button>
                <button type="reset">
                    LIMPAR
                </button>
                </Form>
            </FieldsDiv>
        </Container>
        );
};

export default Register
