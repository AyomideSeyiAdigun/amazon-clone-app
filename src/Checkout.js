import React from 'react';
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import Header from './Header';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';


function Checkout() {
    const [{basket,user}] = useStateValue();
  
    return (
    <>
        <Header/>
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad' src="https://images-na.ssl-images-amazon.com/images/I/7191qk-xnFL.jpg"/>
                <div>
                    <h3>Hello {user?.email}</h3>
                    <h1 className='checkout__title'>Your shopping Basket</h1>
                    {basket.map((item,i)=>(
                        <CheckoutProduct
                        id={item.id}
                        price={item.price}
                        title={item.title}
                        rating={item.rating}
                        image={item.image}
                        />
                    ))}
                </div>
                 
            </div>

            <div className='checkout__right'>
                <Subtotal/>
            </div>
        </div>
    </>
    )
}


export default Checkout
