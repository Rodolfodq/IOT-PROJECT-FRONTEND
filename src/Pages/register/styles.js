import styled from 'styled-components';

export const Container = styled.div`
    max-width: 350px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 1);
    padding: 30px;
    margin: 300px auto;

    h1{
        font-weight: bold;
        font-size: 30px;
        display: flex;
        flex-direction: row;
        align-items: center;

        svg{
            margin-right: 10px;
            color: #000;
        }
    }
`;
export const Form = styled.form`
    margin-top: 40px;
    margin-left: 30px;
    flex-direction: column;
    align-items: center;
    box-align: height;


    input{
        flex: 1;
        border-top-width: 0px;
        border-left-width: 0px;
        border-right-width: 0px;
        padding: 10px 15px;
        font-size: 16px;
        flex-direction: column;
    }

    button{
        font-weight: bold;
        background: #000;
        color: #fff;
        size: 14px;
        width:140px;
        height:40px;
        border: 0;
        padding: 0 15px;
        margin-top: 20px;
        margin-left: 50px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        display: table-row-group;
        flex-direction: row;
    }
`;

export const FieldsDiv = styled.div`
    background-color: white;
`;

export const SubmitButton = styled.button`

    font-weight: bold;
    background: #360033;
    color: #fff;
    size: 14px;
    width:140px;
    height:40px;
    border: 0;
    padding: 0 15px;
    margin-top: 20px;
    margin-left: 50px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;


`;
