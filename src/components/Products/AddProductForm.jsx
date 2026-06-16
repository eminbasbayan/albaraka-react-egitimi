import './AddProductForm.css'; // CSS dosyasını içe aktarıyoruz
import Button from '../UI/Button';
import { useState } from 'react';
import ProductInput from './ProductInput';

const productInputs = [
  {
    label: 'Title',
    type: 'text',
    placeholder: 'Bir ürün ismi giriniz.',
    name: 'title',
  },
  {
    label: 'Image URL',
    type: 'text',
    placeholder: 'Bir ürün görsel linki giriniz.',
    name: 'image',
  },
  {
    label: 'Price',
    type: 'number',
    placeholder: 'Bir ürün fiyatı giriniz.',
    name: 'price',
  },
  {
    label: 'Category',
    type: 'text',
    placeholder: 'Bir ürün kategorisi giriniz.',
    name: 'category',
  },
];

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
    setProductInputData({
      title: '',
      image: '',
      price: 0,
      category: '',
    });
  }

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Yeni Ürün Ekle</h2>

      {productInputs.map((input) => (
        <ProductInput
          key={input.name}
          onChange={handleChange}
          value={productInputData[input.name]}
          {...input}
        />
      ))}

      <Button size="lg" full>
        Ürünü Kaydet
      </Button>
    </form>
  );
};

export default AddProductForm;
