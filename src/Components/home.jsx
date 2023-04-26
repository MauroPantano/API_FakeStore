import { Link } from 'react-router-dom';
import logo from '../img/logo.jpg';
import ShopTransparent from '../img/Shopping-Transparent.png';
import { useState, useEffect } from 'react';
import ImgCart from '../img/cart.jpg';
import Cart from './cart';
import DemoCarousel from './carousel';
import profile from '../img/profile-icon.png';
import Footer from './footer';



const Home = () => {
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
    <div className='main-slogan'>
      <h1 className='slogan'>Transforming shopping into an experience.</h1>
      <img src={ShopTransparent} className="ShopTransparent"></img>
    </div>
    <div className='container-carousel'>
      <DemoCarousel></DemoCarousel>
    </div>
    <Footer></Footer>
  </div>
  );
  };
  
  export default Home;
