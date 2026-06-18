import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [params.productId]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h1>ProductDetails</h1>
      <h2 className="text-3xl">{product.title}</h2>
      <img src={product.image} className='w-32' />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae autem id
        maiores possimus, dolores inventore consequuntur sapiente doloribus
        repellendus adipisci quaerat unde esse hic reiciendis ex eaque
        quibusdam? Nostrum, voluptatum?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae autem id
        maiores possimus, dolores inventore consequuntur sapiente doloribus
        repellendus adipisci quaerat unde esse hic reiciendis ex eaque
        quibusdam? Nostrum, voluptatum?
      </p>
    </div>
  );
};

export default ProductDetails;
