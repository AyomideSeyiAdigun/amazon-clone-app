import React, { useEffect } from 'react';
import './App.css';
import Home from './Home';
import {Routes,Route} from 'react-router-dom'
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import Orders from './Orders';


const promise = loadStripe('pk_test_51KrTh7F6PZaMhGvbypeBT29Wr8CpR2EH0FroaZLBv1wX2mR2xVPPSeY2r98Agw6ATbq4CWloV5g7GgOqwdzUPRQy00seEo1PrZx');


function App() {
  const [{},dispatch] = useStateValue();
   


  useEffect(() => {
    auth
    .onAuthStateChanged(user => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        dispatch({
          type:'SET_USER',
          user
        })
      } else {
        // User is signed out
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    });
    
  }, [])
  //BEM
  return (
    <div className="app">  
    <Routes>
      <Route  path="/" element={  <Home/>} />
      <Route path="checkout" element={<Checkout/>} />
      <Route path="login" element={<Login/>} />
      <Route path="orders" element={<Orders/>} />
      <Route path="payment" element={<Elements stripe={promise}> <Payment/>  </Elements>} />
    </Routes>
    </div>
  );
}

export default App;
