import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Product({ userCart, setUserCart, product }) {
  const navigate = useNavigate();

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const handleAddCart = () => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    axios
      .put("https://projeto14-drivenplant.herokuapp.com/cart", product, config)
      .then((res) => {
        console.log(res);
        setUserCart([...userCart, product]);
      })
      .catch((err) => {
        console.log(err);
        alert("Não foi possível adicionar o item ao carrinho.");
      });
  };

  return (
    <Container>
      <img src={product.image} alt={product.name} />

      <div className="infos">
        <h1>{product.name}</h1>
        <strong>{formatter.format(product.price)}</strong>
      </div>

      <div className="buttons">
        <button onClick={() => navigate(`/product-details/${product.id}`)}>
          Ver
        </button>
        <button onClick={handleAddCart}>Comprar</button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  max-width: calc(100vw / 3);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;

  img {
    width: calc(100vw / 3);
    height: calc(100vw / 3);
    max-width: 300px;
    max-height: 300px;
    object-fit: cover;
    border-radius: 0.5rem;
  }

  h1 {
    font-size: 18px;
  }

  strong {
    font-size: 14px;
    color: green;
  }

  button {
    width: 100%;
    margin-bottom: 0.5rem;
    padding: 0.2rem;
    font-weight: 500;
    cursor: pointer;

    &:last-child {
      background-color: green;
      color: white;
    }
  }
`;
