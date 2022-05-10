import React from 'react'
import Header from './Header'
import './Home.css'
import Product from './Product'
function Home() {
    return (
      <>
       <Header/>
        <div className="home">
        	<div className='home__container'>
            <img className='home__image' alt='backgroung' src= 'https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg'/>
           
						<div className='home__row'>
								<Product id='92832873' title='Ridiculed Thoughts' price={19.92} image='https://m.media-amazon.com/images/I/51cA8HFqmML._AC_SY200_.jpg' rating={4}/>
								<Product id='27165340'  price ={63.76} rating={2} title='Gamer Gifts 20oz Travel Coffee Mug for Men, Stainless Steel Tumbler, Video Gamer Coffee/Cold Drinks Mug for Boys, Gift Idea Cup For Fathers Day, Christmas, Birthday- I‘D RATHER BE GAMING' image='https://m.media-amazon.com/images/I/71lAT7cWGbL._AC_UL320_.jpg'/>
								
						</div>
						<div className='home__row'>
							<Product id='72537404'  price ={59.52} rating={3} title='Drtupe Super Mario Pipe Mug Ceramic Coffee Mug Gift for Gamers, Fathers, Coffee Enthusiasts, for Cappuccino, Latte or Hot Tea, 15 Oz, Green' image='https://m.media-amazon.com/images/I/61zmamBL1dL._AC_UL320_.jpg'/>
							<Product id='54762416' price ={29.02} rating={3} title='Best Funny Coffe Money Cant buy Happiness But It Buys Video Games Gamer Video' image='https://m.media-amazon.com/images/I/71Erwx2vxoL._AC_UL320_.jpg'/>
							<Product id='98763524' price ={12.32} rating={4} title='Konitz Coffee Bar Espresso Cups and Saucers, 2-Ounce, White, Set of 4' image='https://m.media-amazon.com/images/I/41wKDekQ7GL._AC_UL320_.jpg' />
								
						</div>
						<div className='home__row'>
							<Product id='12864730'  price ={24.25} rating={5} title='VSITOO S3 Pro Temperature Control Smart Mug with Sliding Lid, Smart Mug Warmer with Double Vacuum Insulation, 14 oz, Black, 4-Hr Battery Life - App Controlled Heated Coffee Mug - Improved Design' image='https://m.media-amazon.com/images/I/61DuGB2BhqL._AC_UL320_.jpg'/>
						
						</div>
        	</div>
        </div>
      </>
    )
}

export default Home
