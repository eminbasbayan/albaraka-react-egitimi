import './ProductCard.css';

function ProductCard() {
  return (
    <div className="product-card">
      <img
        className="product-image"
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
      />
      <div className="product-info">
        <b className="product-title">Çanta</b>
        <span className="product-price">200₺</span>
      </div>
    </div>
  );
}

export default ProductCard;
