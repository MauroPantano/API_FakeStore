import contactCart from '../img/contact-cart.png';
import contactRimborso from '../img/contact-rimborso.png';
import contactService from '../img/contact-service.png';
import contactContact from '../img/contact-contact.png';
import contactHacking from '../img/contact-hacking.png';
import contactPay from '../img/contact-pay.png';
import contactAccount from '../img/contact-account.png';
import contactPremium from '../img/contact-premium.png';
import Footer from './footer';
import ContactCard from './ContactCard';
import Map from './map';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import profile from '../img/profile-icon.png';
import logo from '../img/logo.jpg';
import ImgCart from '../img/cart.jpg';
import Cart from './cart';

const Contact = () => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    function handleRemoveItem(itemId) {
      const updatedItems = cartItems.filter((item) => item.id !== itemId);
      setCartItems(updatedItems);
    }

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  function handleRemoveItem(itemId) {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  }

  useEffect(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []);
  return (
    <div className='main-container'>
    <header className="header">
    <img src={logo} className="header-logo"></img>
    <div className="header-containerLink">
      <Link to="/home"><a style={{position: 'relative',left: 100}} className="header-containerLink-link">HOME</a></Link>
      <Link to="/shop"><a style={{position: 'relative',left: 170}} className="header-containerLink-link">SHOP</a></Link>
      <Link to="/about"><a style={{position: 'relative',left: 240}} className="header-containerLink-link">ABOUT US</a></Link>
      <Link to="/contact"><a style={{position: 'relative',left: 310}} className="header-containerLink-link">CONTACT</a></Link>
    </div>
    <div style={{width: 'auto', position: 'relative'}}>
      <Link to="/privacy"><a style={{position: 'relative',left: 180, top: 35}} className="header-containerLink-link">privacy</a></Link>
    </div>
    <div style={{width: 'auto', position: 'relative'}}>
      <Link to="/profile"><a className="header-profile"><img style={{position: 'relative', top: 10}} src={profile} width={30} height={30}></img>Profile</a></Link>
    </div>
    <a className="header-cart" onClick={handleCartClick}><img src={ImgCart} width={50} height={50} /></a>
        {isCartOpen && (
          <div>
            <Cart items={cartItems} onRemoveItem={handleRemoveItem} />
          </div>
        )}
    </header>
    <script src="https://maps.googleapis.com/maps/api/js?key="></script>
    <div className='container-contact'>
        <h1>HI. How can we help you?</h1>
        <div className="card-group">
            <ContactCard text="YOUR ORDERS" image={contactCart} onClick={() => console.log("Card 1 clicked!")} />
            <ContactCard text="RETURNS AND REFUNDS" image={contactRimborso} onClick={() => console.log("Card 2 clicked!")} />
            <ContactCard text="SUPPORT FOR SERVICES" image={contactService} onClick={() => console.log("Card 3 clicked!")} />
            <ContactCard text="MANAGE PREMIUMS" image={contactPremium} onClick={() => console.log("Card 4 clicked!")} />
         </div>
         <div className="card-group" style={{paddingTop: 70}}>
            <ContactCard text="PAYMENT OPTIONS" image={contactPay} onClick={() => console.log("Card 5 clicked!")} />
            <ContactCard text="MY ACCOUNT" image={contactAccount} onClick={() => console.log("Card 6 clicked!")} />
            <ContactCard text="SUSPICIOUS ACTIVITIES" image={contactHacking} onClick={() => console.log("Card 7 clicked!")} />
            <ContactCard text="CONTACT US" image={contactContact} onClick={() => console.log("Card 8 clicked!")} />
         </div>
    </div>
    <div className='map-container'>
        <Map />
    </div>
    <Footer></Footer>
  </div>
  );
  };
  
  export default Contact;
