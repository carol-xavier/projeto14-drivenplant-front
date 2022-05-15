import React from "react";
import axios from "axios";
import styled from "styled-components";

import Top from "./../Components/Top";
import Product from "./../Components/Product";

export default function Home({ userCart, setUserCart }) {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("https://projeto14-drivenplant.herokuapp.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) =>
        alert("Houve um erro ao buscar os produtos. Tente mais tarde!")
      );
  }, []);

  return (
    <>
      <Top />

      <Content>
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              product={product}
              userCart={userCart}
              setUserCart={setUserCart}
            />
          );
        })}
      </Content>
    </>
  );
}

const Content = styled.div`
  // TODO: aplicar margin top pra distanciar o conteúdo da header fixa.
  width: 85%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;
