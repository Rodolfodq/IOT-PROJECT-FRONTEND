import React from 'react';

import { RiRemoteControlLine } from "react-icons/ri";
import { Container, Form, FieldsDiv } from './styles'

function SensorNew(){
    return(
        <Container>
            <h1>
                <RiRemoteControlLine color="#000" size={50}/>
                NOVO SENSOR
            </h1>

            <FieldsDiv>
            <Form onSubmit={() => {}}>
                <ul>
                    <input
                        type = "text"
                        placeholder="NOME"
                        autoFocus
                    />
                </ul>
                <br/>
                <ul>
                    <input
                        type = "text"
                        placeholder="FUNÇÃO"
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

export default SensorNew
