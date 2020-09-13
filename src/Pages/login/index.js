import React, {Component, useImperativeHandle} from 'react';
import { Link } from "react-router-dom";

import {BsFillShieldLockFill} from "react-icons/bs";


import api from '../../Services/api';
import {login} from '../../Services/auth';
import { Container, Form, FieldsDiv } from './styles';

export default class Login extends Component{
    state = {
        email: "",
        password: "",
        confirmPassword: "",
        error: ""
    };

    handleSignIn = async e =>{
        e.preventDefault();

        const{email, password, confirmPassword} = this.state;
        if(!email || !password){
            this.setState({error: "Preencha email e senha para continuar!"});
        }else{
            try{
                const response = await api.post("authorize/login", {email, password, confirmPassword});
                login(response.data.token);
                this.props.history.push("");
            }catch(err){
                this.setState({
                    error:
                    "Houve um erro com o login, verifique suas credenciais"
                });
            }

        }
    }

    render() {
        const {email, password, confirmPassword} = this.state;
        return(
            <Container>
                <h1>
                    <BsFillShieldLockFill color="#000" size={50}/>
                    LOGIN
                </h1>
                <FieldsDiv>
                    <Form onSubmit={this.handleSignIn}>
                        <ul>
                            <input
                                type = "text"
                                placeholder="E-MAIL"
                                autoFocus
                                onChange={e => this.setState({ email: e.target.value })}
                            />
                        </ul>
                        <br/>
                        <ul>
                            <input
                                type = "password"
                                placeholder="SENHA"
                                onChange={e => this.setState({ password: e.target.value, confirmPassword: e.target.value})}
                        />
                        </ul>

                        <br/><br/>

                        <button>
                            ENTRAR
                        </button>
                        <br/>
                        <Link to="/register">
                            <button>
                                REGISTRAR
                            </button>
                        </Link>
                        <button type="reset">
                            LIMPAR
                        </button>

                    </Form>
                </FieldsDiv>
            </Container>
            );
    };

};

