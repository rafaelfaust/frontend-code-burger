import styled from 'styled-components'
import Background from '../../img/bg.jpg'

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
    width: 246px;
    height: 354px;
    align-self: center;
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
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 33px;
    text-align: center;
    color: #FFFFFF;
    margin: 25px 0 76px 0;

`;


export const Button = styled.button`
    width: 342px;
    height: 58px;
    border: none;
    font-style: normal;
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;
    background: #D93856;
    color: #FFFFFF;
    cursor: pointer;
    margin-top: 46px;
`;

export const Order = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
    width: 342px;
    height: 101px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    border: none;
    outline: none;
    margin-top: 28px;
    p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    }
    button {
        background: none;
        border: none;
        cursor: pointer;
    }

    &:hover {
        opacity: 0.5;
    }

    &:active {
        color:red;
    }


`;

export const Orders = styled.div` 
    display: flex;
    flex-direction: column;
`;