import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails({ userCart, setUserCart }) {
  const { productId } = useParams();
  const [product, setProduct] = React.useState(null);

  React.useEffect(() => {
    axios
      .get(
        `https://projeto14-drivenplant.herokuapp.com/product?id=${productId}`
      )
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [productId]);

  return (
    product && (
      <div>
        <img src={product.image} alt={product.name} />
        <h1>{product.name}</h1>
        <p>{product.info}</p>
        <p>{product.price}</p>
        <button>Adicionar ao carrinho</button>
      </div>
    )
  );
}
