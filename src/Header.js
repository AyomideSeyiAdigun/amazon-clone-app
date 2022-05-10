import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Outlet,Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
function Header() {
    const [{basket,user}] = useStateValue();

    const handleAuthentication=()=>{
        if(user){
            auth.signOut();
        }
    }
    return (
        <div className="header">
            <Link to='/'><img className="header__logo"  src=" https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt='logo'/></Link>

            <div className="header__search">
                <input className="header__searchInput" type="text"/>
                <SearchIcon className="header__searchIcon"/>
            </div>

            <div className="header__nav">
                <Link to={!user && '/login'}>
                <div onClick={handleAuthentication} className='header__option'>
                    <span className='header__optionLineOne'>
                        Hello {user?user.email : 'Guest'}
                    </span>
                    <span className='header__optionLineTwo'>
                        {user?'Sign out':'Sign in'}
                         
                    </span>
                </div>
                </Link>
                <Link to='/orders'>
                <div className='header__option'>
                    <span className='header__optionLineOne'>
                        Returns 
                    </span>
                    <span className='header__optionLineTwo'>
                         &amp; Orders
                    </span>

                </div>
                </Link>
                <div className='header__option'>
                    <span className='header__optionLineOne'>
                        Your 
                    </span>
                    <span className='header__optionLineTwo'>
                         Prime
                    </span>
                </div>  
                <div className='header__optionBasket'>
                   <Link to='/checkout'> <ShoppingBasketIcon/> </Link>
                    <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
                </div>
            </div>
            <Outlet/>
        </div>
    )
}

export default Header
