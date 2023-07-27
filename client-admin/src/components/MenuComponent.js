import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';
import {Link} from 'react-router-dom'

class Menu extends Component {
  static contextType = MyContext; // using this.context to access global state
  render() {
    return (
      <div className="border-bottom brmenu fire-border">
        <img src="https://cdn.pixabay.com/photo/2017/07/24/15/01/vector-2534950_1280.png" width="220px" height="160px"  alt="" />
        <img src="https://www.rmit.edu.vn/content/dam/rmit/vn/en/assets-for-production/images/news/news-masthead-vietnam-s-fashion-and-textile-industries-must-become-sustainable-to-survive.jpg"   width="1190px" height= "160px" alt="" />
        <div className="float-left">
          <ul className="menu menu-ad">
            <li className="menu home-ad"><Link to='/admin/home' className='meu-text'>Home</Link></li>
            <li className="menu cate-ad"><Link to='/admin/category' className='meu-text'>Category</Link></li>
            <li className="menu pro-ad"><Link to='/admin/product' className='meu-text'>Product</Link></li>  
            <li className="menu ord-ad"><Link to='/admin/order' className='meu-text'>Order</Link></li>
            <li className="menu cus-ad"><Link to='/admin/customer' className='meu-text'>Customer</Link></li>
          </ul>
        </div>
        <div className="float-right Out-log">
         <p className='VIP'> Hello <b>{this.context.username}</b> </p> <Link to='/admin/home' onClick={() => this.lnkLogoutClick()} className='lox'>Logout</Link>
        </div>
        <div className="float-clear" />
      </div> 
    );
  }
  // event-handlers
  lnkLogoutClick() {
    this.context.setToken('');
    this.context.setUsername('');
  }
}
export default Menu;