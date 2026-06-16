import React from 'react';
import './AddProductForm.css'; // CSS dosyasını içe aktarıyoruz
import Button from '../UI/Button';

const AddProductForm = () => {
  return (
    <form className="product-form">
      <h2 className="form-title">Yeni Ürün Ekle</h2>

      <label className="form-field">
        <span className="field-label">Title:</span>
        <input
          type="text"
          className="form-input"
          placeholder="Bir ürün ismi giriniz."
        />
      </label>

      <label className="form-field">
        <span className="field-label">Image URL:</span>
        <input
          type="text"
          className="form-input"
          placeholder="Bir ürün görsel linki giriniz."
        />
      </label>

      <label className="form-field">
        <span className="field-label">Price:</span>
        <input
          type="text"
          className="form-input"
          placeholder="Bir ürün fiyatı giriniz."
        />
      </label>

      <label className="form-field">
        <span className="field-label">Category:</span>
        <input
          type="text"
          className="form-input"
          placeholder="Bir ürün kategorisi giriniz."
        />
      </label>

      <Button size="lg" full>Ürünü Kaydet</Button>
    </form>
  );
};

export default AddProductForm;
