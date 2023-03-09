import React, { useState, useRef} from 'react'

import Burger from './img/burger.png'

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
  const [order, setOrder] = useState([]);
  const inputOrder = useRef();
  const inputName = useRef();


  async function addNewOrder() {
    const { data: newOrder } = await {
      name: inputName.current.value, 
      order: inputOrder.current.value,
    };

    setOrder([order, newOrder]);
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
      
        <Button type={'submit'} onClick={addNewOrder}>Novo Pedido</Button>

      </ContainerItens>
    </Container>
    );
}

export default App