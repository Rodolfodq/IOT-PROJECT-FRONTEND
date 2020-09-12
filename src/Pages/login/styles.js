import styled from 'styled-components';

export const Container = styled.div`
    max-width: 700px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 1);
    padding: 30px;
    margin: 80px auto;

    h1{
        font-weight: bold;
        font-size: 40px;
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
    margin-top: 30px;
    display: flex;
    flex-direction: row;

    input{
        flex: 1;

        border-top-width: 0px;
        border-left-width: 0px;
        border-right-width: 0px;
        padding: 10px 15px;
        font-size: 16px;
    }
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
    margin-left: 500px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;


`;
