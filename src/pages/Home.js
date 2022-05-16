import React from "react";
import { api } from "./../assets/api";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import Top from "./../Components/Top";
import Product from "./../Components/Product";

export default function Home({ userCart, setUserCart }) {
  const [products, setProducts] = React.useState([]);
  const { category } = useParams();

  React.useEffect(() => {
    if (category) {
      api
        .get(`/products?category=${category}`)
        .then((res) => {
          setProducts(res.data);
        })
        .catch((err) => {
          alert("Houve um erro ao buscar os produtos. Tente mais tarde!");
        });
    } else {
      api
        .get("/products")
        .then((res) => {
          setProducts(res.data);
        })
        .catch((err) => {
          alert("Houve um erro ao buscar os produtos. Tente mais tarde!");
        });
    }
  }, [category]);

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
  width: 85%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;
