import Button from '../UI/Button';
import { useNavigate } from 'react-router';
import { addToCart, miktarArttir, miktarAzalt, removeFromCart } from '../../redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import './ProductCard.css';

function ProductCard(props) {
  const { cartItems } = useSelector((state) => state.cart);
  const { setProducts, ...product } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        <b
          className="product-title cursor-pointer hover:bg-red-300"
          onClick={() => navigate(`/product-details/${props.id}`)}
        >
          {props.title}
        </b>
        <div className="flex justify-between">
          <span className="product-price">{props.price}₺</span>
          {props.cart && (
            <div className="flex gap-2">
              <button onClick={() => dispatch(miktarArttir(props.id))}>
                +
              </button>
              <b>{product.quantity}</b>
              <button onClick={() => dispatch(miktarAzalt(props.id))}>-</button>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2">
          {props.cart ? (
            <Button
              size="lg"
              onClick={() => dispatch(removeFromCart(props.id))}
              color="danger"
            >
              Sepetten Sil
            </Button>
          ) : (
            <>
              <Button
                size="lg"
                onClick={() => dispatch(addToCart({ ...product, quantity: 1 }))}
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
