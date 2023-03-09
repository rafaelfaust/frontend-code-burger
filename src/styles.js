import styled from 'styled-components'
import Background from './img/bg.jpg'

export const Container = styled.div`
    background: url("${Background}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    height: 100%;
    min-height: 100vh;
`;

export const Image = styled.img`
    width: 342px;
    height: 354px;
`;

export const ContainerItens = styled.div` 
    display: flex;
    flex-direction: column;
    background: #363636;
    border-radius: 61px 61px 61px 61px;
    padding: 50px 36px;
    color: white;
    height: 100%;
`;

export const H1 = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 33px;
    text-align: center;
    olor: #FFFFFF;
`;

export const InputLabel = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
`;

export const Input = styled.input`
    color: #ffffff;
    width: 342px;
    height: 58px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    padding-left: 25px;
    border: none;
    outline: none;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 30px;
`;

export const Button = styled.button`
    width: 369px;
    height: 58px;
    border: none;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;
    background: #D93856;
    color: #FFFFFF;
    cursor: pointer;
`;
