import { useContext } from 'react';
import Button from '../UI/Button';
import './ProductCard.css';
import { CartContext } from '../../context/CartContext';

function ProductCard(props) {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const { setProducts, ...product } = props;

  function deleteProduct() {
    /*     const filteredProducts = props.products.filter(
      (item) => item.id !== props.id,
    );
    props.setProducts(filteredProducts); */

    setProducts(props.id);
  }

  const findCartItem = cartItems.find((item) => item.id === props.id);

  return (
    <div className="product-card">
      <img className="product-image" src={props.image} />
      <div className="product-info">
        <span className="product-category">{props.category}</span>
        <b className="product-title">{props.title}</b>
        <span className="product-price">{props.price}₺</span>
        <div className="flex flex-col gap-2">
          {props.cart ? (
            <Button
              size="lg"
              onClick={() => removeFromCart(props.id)}
              color="danger"
            >
              Sepetten Sil
            </Button>
          ) : (
            <>
              <Button
                size="lg"
                onClick={() => addToCart(product)}
                disabled={findCartItem}
              >
                Sepete Ekle
              </Button>
              <Button color="danger" size="lg" onClick={deleteProduct}>
                Ürünü Sil
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
