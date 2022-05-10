import React from 'react'
import './Product.css'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useStateValue } from './StateProvider';
function Product({id,title,price,image,rating}) {
  const [{basket},dispatch] = useStateValue();

  const AddToBasket = ()=> {

    dispatch({
      type:'ADD_TO_BASKET',
      item:{
        id,title,price,image,rating
      }
      
    })
  }
    return (
        <div className='product'>
            <img src={image} alt=''/>
          <div className='product__info'>
            <p>{title}</p>
            <p className='product__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product__rating'>
             {Array(rating).fill().map((_,i)=>(
               <p><StarBorderIcon/></p>
             ))}
              
            </div>
          </div>
        
          <button onClick={AddToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
