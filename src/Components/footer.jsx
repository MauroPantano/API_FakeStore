import React from 'react'
import '../App.css';
import instagram from '../img/instagram.png';
import facebook from '../img/facebook.png';
import twitter from '../img/twitter.png';
import profile from '../img/profile-icon.png';
import { Link } from 'react-router-dom';

const footer = () => {
  return (
    <div className='footer'>
        
        <div className='footer-section1'>
        <h1 className='footer-section1-title'>LINKS</h1>
          <Link to="/home"><a className="header-containerLink-link">HOME</a></Link>
          <Link to="/shop"><a className="header-containerLink-link">SHOP</a></Link>
          <Link to="/about"><a className="header-containerLink-link">ABOUT US</a></Link>
          <Link to="/contact"><a className="header-containerLink-link">CONTACT</a></Link>
          <Link to="/privacy"><a className="header-containerLink-link">PRIVACY</a></Link>
          <Link to="/profile"><a className="header-containerLink-link">PROFILE</a></Link>
        </div>
        <div className='footer-section2'>
        <h1 className='footer-section2-title'>INFORMATION</h1>
          <label>Email: <a> shopFake@gmail.com</a></label>
          <label>Cell: <a> 3272054499</a></label>
          <label>Fax: <a> +1 669 200 10 10</a></label>
          <label>Address: <a> Via Caronte 110</a></label>
        </div>
        <div className='footer-section3'>
          <label className='footer-section3-newsletter'>SUBSCRIBE TO THE NEWSLETTER : </label>
          <div className='footer-section3-newsletter-container'>
            <input className='newsletter-email' type="email"/>
            <button className='newsletter-button' type='submit'>SUBSCRIBE</button>
          </div>
          <div className='footer-social'>
            <a href='https://www.instagram.com/'><img style={{position: 'relative', top: 10}} src={instagram} width={50} height={50}></img></a>
            <a href='https://it-it.facebook.com/'><img style={{position: 'relative', top: 10}} src={facebook} width={50} height={50}></img></a>
            <a href='https://twitter.com/?lang=it'><img style={{position: 'relative', top: 10}} src={twitter} width={50} height={50}></img></a>
          </div>            
        </div>
          
    </div>
  )
}
export default footer;
