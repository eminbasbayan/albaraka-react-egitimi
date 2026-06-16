import { useState } from 'react';
import './ProductCard.css';

function ProductCard(props) {
  const [titleState, titleSetState] = useState(props.title);

  function handleClick() {
    titleSetState('Title Değişti!');
  }

  console.log("component re-render!");
  

  return (
    <div className="product-card">
      <img className="product-image" src={props.image} />
      <div className="product-info">
        <span className="product-category">{props.category}</span>
        <b className="product-title">{titleState}</b>
        <span className="product-price">{props.price}₺</span>
        <button onClick={handleClick}>Title Değiştir</button>
      </div>
    </div>
  );
}

export default ProductCard;
