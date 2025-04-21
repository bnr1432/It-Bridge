import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';

import Message from './message';
import Customer from './customer';
import AddNumber from './addNumber';
import ITBridgeConverter from './ITBridgeConvetor';
import CheckOddOrEven1 from './mathOperation';
import Counter from './counter';
import Message1 from './message1';
import BindExample from './bind';
import Visitor from './Activity4';
import ShowDate from './showDate';
import MyTime from './lifeCycle';
import Clock from './clock';
import EMI from './emiCal';

function Welcome(props) {
  return(
    <h1>Welcome to {props.fullname} City is {props.city}</h1>
  )
}

function Hello({name}) {
  return(
    <h1>Hello {name}!</h1>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <>
       <App/>
      {/* <Welcome fullname="Nagarjuna" city="Bangalore" />
      <Message LastName = "Reddy" />
      <Customer fullname="Badepalli" city="Sundupalli" />  
      <AddNumber a={10} b={20} />
      <ITBridgeConverter name="nagarjuna" />
      <CheckOddOrEven1 number={21} />

      <Hello name="Chinni" />

      <Counter />
      <Message1 /> */}
      {/* <Counter /> */}
      {/* <BindExample /> */}
      {/* <Visitor /> */}
      {/* <ShowDate /> */}
      {/* <MyTime /> */}
      {/* <Clock /> */}
      <EMI />

    </>
  </React.StrictMode>
 
);
