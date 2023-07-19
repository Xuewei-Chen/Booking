import React, { Component } from 'react'
import Icon from '@mui/material/Icon';
import "./Header.css"
class Header extends Component {
  render() {
    return (
      <header>
        <nav class ="navbar">    
            <ul className='navbar_links'>
              <li><a href="/home">Home</a></li>        
              <li><a href="/about">About us</a></li> 
              <li><a href="/menu">Menu</a></li>
              <li><a href="/reservation">Reservation</a></li>
              <li><a href="/log in">Log in</a></li>
            </ul>
        </nav>
        {/* <div className='navbar_sign'>
          <p>Sign in</p>
          <button type="button">Sign up</button>
        </div> */}
        <div class="icons">
            <div class ="search" id="search-btn"></div>
            <div class ="shopping-cart" id="cart-btn"></div>
        </div>
      </header>   
    )
  }
}

export default Header