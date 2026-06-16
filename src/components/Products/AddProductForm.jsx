import './AddProductForm.css'; // CSS dosyasını içe aktarıyoruz
import Button from '../UI/Button';
import { useState } from 'react';

const AddProductForm = (props) => {
  const [productInputData, setProductInputData] = useState({
    title: '',
    image: '',
    price: 0,
    category: '',
  });

  function handleChange({ target: { value, name } }) {
    setProductInputData({
      ...productInputData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    props.handleAddProduct({ id: Math.random(), ...productInputData });
  }

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Yeni Ürün Ekle</h2>

      <label className="form-field">
        <span className="field-label">Title: {productInputData.title}</span>
        <input
          type="text"
          className="form-input"
          placeholder="Bir ürün ismi giriniz."
          onChange={handleChange}
          name="title"
        />
      </label>

      <label className="form-field">
        <span className="field-label">
          Image URL: {productInputData.image}{' '}
        </span>
        <input
          type="text"
          className="form-input"
          placeholder="Bir ürün görsel linki giriniz."
          onChange={handleChange}
          name="image"
        />
      </label>

      <label className="form-field">
        <span className="field-label">Price: {productInputData.price}</span>
        <input
          type="number"
          className="form-input"
          placeholder="Bir ürün fiyatı giriniz."
          onChange={handleChange}
          name="price"
        />
      </label>

      <label className="form-field">
        <span className="field-label">
          Category: {productInputData.category}{' '}
        </span>
        <input
          type="text"
          className="form-input"
          placeholder="Bir ürün kategorisi giriniz."
          onChange={handleChange}
          name="category"
        />
      </label>

      <Button size="lg" full>
        Ürünü Kaydet
      </Button>
    </form>
  );
};

export default AddProductForm;
