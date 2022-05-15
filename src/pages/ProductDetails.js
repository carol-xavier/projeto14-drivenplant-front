import axios from "axios";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Top from "./../Components/Top";

export default function ProductDetails({ userCart, setUserCart }) {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [product, setProduct] = React.useState(null);

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const handleAddCart = () => {
    // const config = {
    //   headers: {
    //     User: `${localStorage.getItem("token")}`,
    //   },
    // };

    const email = localStorage.getItem("email");

    axios
      .put("https://projeto14-drivenplant.herokuapp.com/cart", {
        product,
        email,
      })
      .then((res) => {
        console.log(res);
        setUserCart([...userCart, product]);
      })
      .catch((err) => {
        console.log(err);
        alert("Não foi possível adicionar o item ao carrinho.");
      });
  };

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
      <>
        <Top />
        <Container>
          <Content>
            <img src={product.image} alt={product.name} />
            <h1>{product.name}</h1>
            <p className="price">{formatter.format(product.price)}</p>
            <p>{product.info}</p>
            <div className="buttons">
              <button onClick={handleAddCart}>Adicionar ao carrinho</button>
              <button className="btn-back" onClick={() => navigate(-1)}>
                Voltar
              </button>
            </div>
          </Content>
        </Container>
      </>
    )
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`;

const Content = styled.div`
  width: 90%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;

  img {
    height: 300px;
    width: 300px;
    object-fit: cover;
    border-radius: 50%;
  }

  h1 {
    font-size: 28px;
    line-height: 1.3;
    color: #4d6b52;
    border-bottom: 2px solid #4d6b5260;
    text-align: center;
  }

  p {
    color: #333;
    text-align: center;

    &.price {
      font-size: 20px;
      background-color: #fff;
      border-radius: 1rem;
      width: 60%;
      max-width: 206px;
      text-align: center;
      font-weight: 600;
    }
  }

  .buttons {
    display: flex;
    flex-direction: column;

    button {
      padding: 0.4rem 1rem;
      border-radius: 1rem;
      background-color: #4d6b52;
      color: #fff;
      font-weight: 500;
      cursor: pointer;

      &.btn-back {
        background-color: transparent;
        color: #333;

        &:hover {
          text-decoration: underline;
        }

        margin-bottom: 2rem;
      }

      &:hover {
        filter: brightness(90%);
      }
    }
  }
`;
