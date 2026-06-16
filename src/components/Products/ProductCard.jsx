import './ProductCard.css';

function ProductCard(props) {


  function handleClick() {
    props.setTitleState('Title Değişti!');
  }

  return (
    <div className="product-card">
      <img className="product-image" src={props.image} />
      <div className="product-info">
        <span className="product-category">{props.category}</span>
        <b className="product-title">{props.titleState}</b>
        <span className="product-price">{props.price}₺</span>
        <button onClick={handleClick}>Title Değiştir</button>
      </div>
    </div>
  );
}

export default ProductCard;
