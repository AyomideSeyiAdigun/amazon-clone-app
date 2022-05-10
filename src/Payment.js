import { CardElement,  useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format';
import { Link, useNavigate } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import Header from './Header'
import './Payment.css'
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider'
import axios from './axios'
import { db } from './firebase';
function Payment() {
    const  navigate = useNavigate();
    const [{basket,user},dispatch]=useStateValue();
    const stripe = useStripe();
    const elements = useElements();
    const [succeeded,setSucceeded]= useState(false);
    const [processing,setProcessing]=useState("")
    const [error,setError]= useState(null);
    const [disabled,setDisabled]= useState(true);
    const [clientsecret,setClientSecret]=useState(true);

    useEffect(()=>{
        const getClientSecret = async () => {
            const response = await axios ({
                method:'post',
                //stripes expects total in currency unit form
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])
    console.log('client secret >>>>>',clientsecret)
  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientsecret,{
        payment_method:{
            card:elements.getElement(CardElement)
        }
    }).then(({paymentIntent})=>{
        db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .doc(paymentIntent.id)
        .set({
            basket:basket,
            amount:paymentIntent.amount,
            created:paymentIntent.created 
        })
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        dispatch({
            type:'EMPTY_BASKET'
        })
        navigate("/orders", { replace: true });

    })
    };

    const handleChange = event =>{
        setDisabled(event.empty);
        setError(event.error?event.error.message:"");
    }
    return (
    <>
    <Header/>
        <div className='payment'>
            <div className='payment__container '>
                <h1>
                        Checkout(
                            <Link to='/checkout'>{basket?.length} items</Link>
                        )
                </h1>
                <div className='payment__section'>
                  
                    <div className='payment__title'>
                        <h3>Delivery payment</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                    </div>
                </div>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item =>(
                            <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                            image={item.image}
                            
                            />
                        ))}
                    </div>
                </div>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment__details'>
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className='payment__priceContainer'>
                                <CurrencyFormat
                                value={getBasketTotal(basket)}
                                displayType={'text'} 
                                thousandSeparator={true}
                                prefix={'$'}b
                                decimalScale={2}
                                renderText={value=>(
                                    <h3>Order Total: {value} </h3>
                                )}
                                />
                              <button disabled={processing || disabled || succeeded}>
                                  <span>{processing?<p>Processing</p>:"Buy Now"}</span>
                              </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Payment
