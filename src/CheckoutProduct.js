import React from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct({image,id,title,rating,price, hideButton}) {
    const [{basket},dispatch] = useStateValue();
    const removeFromBasket = ()=>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id
        })
    }
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image}/>
            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkoutProduct__rating'>
                    {Array(rating).fill().map((_,i)=>(
                        <p><StarBorderIcon/></p>
                    ))}
                </div>
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                )}
            </div>
            
        </div>
    )
}

export default CheckoutProduct 
