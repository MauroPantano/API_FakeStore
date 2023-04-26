import { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from '../img/logo.jpg';
import ImgCart from '../img/cart.jpg';
import Cart from './cart';
import profile from '../img/profile-icon.png';
import Footer from './footer';

const ProductList = () => {
  const Product = [
    {
      id: 1,
      title: 'Product 1',
      price: 10.99,
      description: 'This is product 1',
      category: 'category 1',
      image: 'product-1.jpg',
      rating: {
        rate: 4.5,
        count: 10,
      },
    },
    // ...
  ];
    const [products, setProducts] = useState(Product);
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    
    function handleAddToCart(product) {
      const existingCartItem = cartItems.find((item) => item.id === product.id);
      if (existingCartItem) {
        const updatedCart = cartItems.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
        setCartItems(updatedCart);
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
      } else {
        const updatedCart = [...cartItems, { ...product, quantity: 1 }];
        setCartItems(updatedCart);
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
      }
    }
  
    function handleRemoveFromCart(product) {
      const updatedItems = cartItems.filter((item) => item.id !== product.id);
      setCartItems(updatedItems);
    }
  
    function handleRemoveItem(itemId) {
      const updatedCart = cartItems.filter((item) => item.id !== itemId);
      setCartItems(updatedCart);
      localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    }

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    async function getProducts() {
      const response = await axios.get('https://fakestoreapi.com/products');
      const products = response.data;
      setProducts(products);
    }
    getProducts();
  }, []);

  useEffect(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []);

  return (
    
    <div className='main-container'>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
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
            <Cart  items={cartItems} onRemoveItem={handleRemoveItem} />
          </div>
        )}
        </header>
      <div className="App">
        <h1 style={{justifyContent: 'center', textAlign: 'center'}}>PRODUCT</h1>
        <div style={{display: 'flex', flexDirection: 'row'}}>
        <label style={{position: 'relative', left: 420, top: 15, fontWeight: 'bold'}}>SEARCH </label><input type='text' name='search' className='search' value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        </div>
        <div className='container'>
        {filteredProducts.map((product) => (
          <div className='product-info'>
        <div className="product" key={product.id}>
        <img src={product.image} alt={product.title} width={200} height={200}/>
          <h2 className='product-title'>{product.title}</h2>
          <p><b>PRICE:</b> {product.price} €</p>
          <p className='product-rating'><b>RATING: </b> 
          {Array.from({ length: Math.floor(product.rating.rate) }, (_, index) => (
            <span key={index} className="fa fa-star checked"></span>
          ))}
          {product.rating.rate % 1 !== 0 && (
            <span className="fa fa-star-half checked"></span>
          )}</p>
          <div className='product-button'>
            <button className='product-remove' onClick={() => handleRemoveFromCart(product)}>-</button>
            <button className='product-add' onClick={() => handleAddToCart(product)}>+</button>
          </div>
        </div>
        </div>
      ))}
      </div>
      </div>
      <Footer></Footer>
    </div>
  );
  };

  export default ProductList;


