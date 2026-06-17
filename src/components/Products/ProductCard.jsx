import Button from '../UI/Button';
import './ProductCard.css';

function ProductCard(props) {
  function deleteProduct() {
    /*     const filteredProducts = props.products.filter(
      (item) => item.id !== props.id,
    );
    props.setProducts(filteredProducts); */

    props.setProducts(props.id);
  }

  return (
    <div className="product-card">
      <img className="product-image" src={props.image} />
      <div className="product-info">
        <span className="product-category">{props.category}</span>
        <b className="product-title">{props.title}</b>
        <span className="product-price">{props.price}₺</span>
        <div className="flex flex-col gap-2">
          <Button size="lg" onClick={() => {}}>
            Sepete Ekle
          </Button>
          <Button color="danger" size="lg" onClick={deleteProduct}>
            Ürünü Sil
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
