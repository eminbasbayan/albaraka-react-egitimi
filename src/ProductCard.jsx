function ProductCard() {
  const productCardStyle = {
    backgroundColor: 'red',
  };

  return (
    <div className="product-card" style={productCardStyle}>
      <img
        className="product-image"
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
        style={{
          width: '200px',
        }}
      />
      <b className="product-title">Çanta</b>
      <span className="product-price">200₺</span>
    </div>
  );
}

export default ProductCard;
