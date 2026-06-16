import Products from './components/Products/Products';
import Button from './components/UI/Button';

function App() {
  return (
    <div>
      <Button title="Ürün Ekle" size="lg" color="primary" />
      <Button title="Ürün Ekle" size="lg" />
      <br />
      <br />

      <Button title="Ürün Sil" size="sm" color="danger" />
      <Products />
    </div>
  );
}

export default App;
