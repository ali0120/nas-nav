import React from 'react'
import { useRecoilValue } from 'recoil';
import { cardState } from '../../../../state/cardState';
import adidas from './../../../../images/middleNav/adidas.svg'
import cart from './../../../../images/middleNav/cart.svg'
import wishlist from './../../../../images/middleNav/wishlist.svg'
import user from './../../../../images/middleNav/user.svg'
import './MiddleNav.css'

const MiddleNav = () => {
    const cardData = useRecoilValue(cardState);
    let productCount = 0
    cardData?.forEach((item) => productCount += item.quantity)
    console.log(cardData)
    return (
        <section className='middlenav'>
            <div className="container">
                <div className="middlenav_inner">
                    <form>
                        <input type="search" placeholder="Search" />
                        <button type="submit">Search</button>
                    </form>
                    <div className="middlenav_brand">
                        <img src={adidas} alt="brand logo" />
                    </div>
                    <ul className="middlenav_info-containers">
                        <li>
                            <div className="icon_container">
                                <img src={cart} alt="cart icon" />
                                <span className='badge' >{productCount}</span>
                            </div>
                            <h3>Cart</h3>
                        </li>
                        <li>
                            <img src={wishlist} alt="wishlist icon" />
                            <h3>Wishlist</h3>
                        </li>
                        <li>
                            <img src={user} alt="user icon" />
                            <h3>Login</h3>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default MiddleNav