import React, { useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

import Axios from 'axios';

import Burger from '../../img/burger-bag.png';
import Trash from '../../img/trash.png';

import {
  Container,
  ContainerItens,
  Image,
  H1,
  Order,
  Orders,
  Button,
} from './styles';

function App() {
  const [orders, setOrders] = useState([]);
  const history = useHistory();

  useEffect(() => {

    async function fetchOrders() {
      const { data: newOrders } = await Axios.get("http://localhost:3001/orders")

      setOrders(newOrders);
    }

    fetchOrders()
  }, [])

  function goBack (){
    history.push('/')
  }

  

  async function deleteOrder(orderId){
    await Axios.delete(`http://localhost:3001/orders/${orderId}`)
    const newOrders = Orders.filter((order) => order.id !== orderId)

    setOrders(newOrders);
  }


  return (
    <Container>
      <ContainerItens isBlur={true}>
      <Image alt="logo-image" src={Burger} />
        <H1>Pedidos!</H1>
 
        <ul>
          {orders.map((order) => (
            <Order key={order.id}>
              <Orders>
              <p>{order.list}</p>
              <h3>{order.name }</h3>
              </Orders>
              <button onClick={() => deleteOrder(order.id)}>
                <img src={Trash} alt="trash" />
              </button>
            </Order>
          ))}
        </ul>

        <Button isBackground={true} onClick={goBack}>
         Voltar 
        </Button>

      </ContainerItens>
    </Container>

  )
}

export default App