import './AddProductForm.css'; // CSS dosyasını içe aktarıyoruz
import Button from '../UI/Button';
import { useState } from 'react';

const AddProductForm = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleImageChange(event) {
    setImage(event.target.value);
  }

  function handlePriceChange(event) {
    setPrice(event.target.value);
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  return (
    <form className="product-form">
      <h2 className="form-title">Yeni Ürün Ekle</h2>

      <label className="form-field">
        <span className="field-label">Title: {title}</span>
        <input
          type="text"
          className="form-input"
          placeholder="Bir ürün ismi giriniz."
          onChange={handleTitleChange}
        />
      </label>

      <label className="form-field">
        <span className="field-label">Image URL: {image} </span>
        <input
          type="text"
          className="form-input"
          placeholder="Bir ürün görsel linki giriniz."
          onChange={handleImageChange}
        />
      </label>

      <label className="form-field">
        <span className="field-label">Price: {price}</span>
        <input
          type="text"
          className="form-input"
          placeholder="Bir ürün fiyatı giriniz."
          onChange={handlePriceChange}
        />
      </label>

      <label className="form-field">
        <span className="field-label">Category: {category} </span>
        <input
          type="text"
          className="form-input"
          placeholder="Bir ürün kategorisi giriniz."
          onChange={handleCategoryChange}
        />
      </label>

      <Button size="lg" full>
        Ürünü Kaydet
      </Button>
    </form>
  );
};

export default AddProductForm;
