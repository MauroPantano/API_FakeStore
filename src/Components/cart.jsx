import { useState, useEffect } from 'react';
import { total } from './shop';

function Cart({ items, onRemoveItem }) {
    const[total, setTotal] = useState(0);
    const [isCartOpen, setIsCartOpen] = useState(true);
    const handleCartClick = () => {
        setIsCartOpen(!isCartOpen);
      };

      useEffect(() => {
        const newTotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotal(newTotal);
      }, [items]);
  return (
    <div>
        {isCartOpen && (
    <div className="cart">
        <a className="cart-close" onClick={handleCartClick}>X</a>
        <center>
      <h2>Shopping Cart</h2>
      </center>
      {items.length === 0 ? (
        <center>
        <p>Your cart is empty</p>
        </center>
      ) : (
        <ul>
          {items.map((item) => (
            <div className='cart-section'>
            <li className='cart-row' key={item.id}>
                <img className='cart-img' src={item.image} width={50} height={50}/>
              <p className='cart-title'>{item.title} - {item.price}$</p><br></br>
              
              <button className='cart-productRemove' onClick={() => onRemoveItem(item.id)}>X</button>
            </li>
            <p className='cart-quantity'>Quantity: {item.quantity}</p>
            </div>
          ))}
          <div> 
            <button className='cart-buy'>BUY</button>
            <p className='cart-total'>TOTAL: {total.toFixed(2)}</p>
        </div>
        </ul>
        )}
    </div>
        )}
    </div>
  );
}

export default Cart;

