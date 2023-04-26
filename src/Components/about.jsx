import { useState, useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import logo from '../img/logo.jpg';
import ImgCart from '../img/cart.jpg';
import Cart from './cart';
import About1 from '../img/about-1.jpg';
import About2 from '../img/about-2.jpg';
import About3 from '../img/about-3.jpg';
import profile from '../img/profile-icon.png';
import Footer from './footer';

const About = () => {
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
        <div className="about-container">
        <h1>About Us</h1>
        <p>We are a fashion-forward online clothing store that offers a wide variety of trendy and affordable clothing options for men and women. Our mission is to help you look and feel your best, without breaking the bank.</p>
        <p>At our store, we believe that fashion should be accessible to everyone, regardless of their budget. That's why we offer a carefully curated selection of clothing that is both stylish and affordable.</p>
        <h2>Our Story</h2>
        <p>Our store was founded by a group of fashion enthusiasts who wanted to make trendy and affordable clothing accessible to everyone. We started out as a small online store, but quickly grew thanks to the support of our loyal customers.</p>
        <p>Today, we are proud to offer a wide selection of clothing for men and women, as well as shoes, accessories, and beauty products. We are constantly updating our inventory to bring you the latest fashion trends, so be sure to check back often!</p>
        <h2>Our Mission</h2>
        <p>Our mission is to provide you with fashionable and affordable clothing that makes you feel confident and empowered. We believe that everyone deserves to look and feel their best, and we are committed to making that a reality for all of our customers.</p>
        <p>We are also committed to sustainability and ethical fashion. We work with suppliers who share our values and are committed to reducing waste and promoting fair labor practices.</p>
        <h2>Contact Us</h2>
        <p>If you have any questions or concerns, please don't hesitate to contact us. You can reach us by email, phone, or through our website's contact form. We are always happy to hear from our customers!</p>
        <p>Thank you for choosing our store for all of your fashion needs. We look forward to serving you!</p>
        </div>
        <div className='about-profile'>
          <div className='about-profile-container1'>
            <img src={About1} className="img-about1" width={320} height={300}></img>
            <h2>Thomas Scorpo</h2>
            <h3>UI/UX designer</h3>
            <p className='about-profile-container1__p'>UI UX designers create the user interface for an app, website, or other interactive media. Their work includes collaborating with product managers and engineers to gather requirements from users before designing ideas that can be communicated using storyboards.</p>
          </div>
          <div className='about-profile-container2'>
            <img src={About2} className="img-about2" width={320} height={300}></img>
            <h2>Chiara Laporta</h2>
            <h3>Project Manager</h3>
            <p className='about-profile-container2__p'>A project manager identifies the project's goals, objectives, and scope and creates a project plan that outlines the tasks, timelines, and resources required. They communicate with the project team and stakeholders, manage risks and issues, and monitor progress to ensure that the project stays on track</p>
          </div>
          <div className='about-profile-container3'>
            <img src={About3} className="img-about3"  width={320} height={300}></img>
            <h2>Mohamed Charni</h2>
            <h3>Web developer</h3>
            <p className='about-profile-container3__p'>A web developer makes and maintains websites. They are in charge of a site's overall look and feel. Web developers also handle the technical aspects of a website, including its performance (website speed) and capacity (the maximum amount of traffic the site could handle at a given time).</p>
          </div>
        </div>
        <Footer></Footer>
    </div>
  );
};

export default About;
