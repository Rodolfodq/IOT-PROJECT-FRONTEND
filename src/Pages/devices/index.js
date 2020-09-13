import React from 'react';

import { RiCpuLine } from "react-icons/ri";
import { Container, Form, FieldsDiv } from './styles'

function DeviceNew(){
    return(
        <Container>
            <h1>
                <RiCpuLine color="#000" size={50}/>
                NOVO EQUIPAMENTO
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
                        placeholder="MODELO"
                    />
                </ul>
                <br/>
                <ul>
                    <input
                        type = "text"
                        placeholder="MAC-ID"
                    />
                </ul>
                <br/>
                <ul>
                    <input
                        type = "text"
                        placeholder="LOCALIZAÇÃO"
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

export default DeviceNew
