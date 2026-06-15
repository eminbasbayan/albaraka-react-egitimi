import './ProductCard.css';

function ProductCard(props) {

  console.log(props);
  

  return (
    <div className="product-card">
      <img
        className="product-image"
        src={props.image}
      />
      <div className="product-info">
        <span className="product-category">{props.category}</span>
        <b className="product-title">{props.title}</b>
        <span className="product-price">{props.price}₺</span>
      </div>
    </div>
  );
}

export default ProductCard;
