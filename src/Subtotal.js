import React, { useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { useNavigate } from 'react-router-dom';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import './Subtotal.css'
function Subtotal() {
    const [{basket},dispatch] = useStateValue();
    const  navigate = useNavigate();
    return (
        <div className='subtotal'>
            <CurrencyFormat
            value={getBasketTotal(basket)}
            displayType={'text'} 
            thousandSeparator={true}
             prefix={'$'}b
             decimalScale={2}
             renderText={value=>(
                 <>
                 <p>
                    Subtotal ({basket?.length} items):<strong>{value}</strong>
                 </p>
                 <small className='subtotal__gift'>
                     <input type='checkbox'/> This order contains a gift
                 </small>
                 </>
             )}
            />
            <button onClick={e=> navigate("/payment", { replace: true })}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
