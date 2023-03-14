import React, { useState, useRef} from 'react'
import { useHistory } from 'react-router-dom'

import Axios from 'axios'

import Burger from '../../img/burger.png'

import {
  Container,
  ContainerItens,
  Image,
  H1,
  InputLabel,
  Input,
  Button,
} from './styles';

function App () {
  const [orders, setOrders] = useState([]);
  const inputOrder = useRef();
  const inputName = useRef();
  const history = useHistory();


  async function addNewOrder() {
    const { data: newOrder } = await Axios.post("http://localhost:3001/orders", {
      list: inputOrder.current.value, 
      name: inputName.current.value,
    });

    setOrders([orders, newOrder]);

    history.push('/orders');
  }

  return (
    <Container>
      <ContainerItens>
        <Image alt="logo-image" src={Burger} />
        <H1>Faça seu pedido!</H1>

        <InputLabel>Pedido</InputLabel> 
        <Input ref={inputOrder} placeholder='Digite seu pedido'></Input>
        
        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputName} placeholder='Digite seu nome'></Input>
      
        <Button onClick={addNewOrder}>Novo Pedido</Button>

      </ContainerItens>
    </Container>
    );
}

export default App