import React from "react";
// import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import styled from "styled-components";

import Top from "./../Components/Top";
import CartProducts from "./../Components/CartProducts";
// import UserContext from "./../Contexts/UserContext";

export default function Checkout() {
  // const navigate = useNavigate();
  // const { userEmail } = React.useContext(UserContext);
  const [isLoading, setIsLoading] = React.useState(false);
  // const [renderCheckout, setRenderCheckout] = React.useState(false);
  const [cart, setCart] = React.useState();

  React.useEffect(() => {
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get("https://projeto14-drivenplant.herokuapp.com/cart", config)
      .then((res) => {
        setCart(res);
        console.log("CARRINHO", cart);
      });
  }, [cart]);

  function handleCart(event) {
    event.preventDefault();
    setIsLoading(true);

    const object = {};

    axios
      .post("https://projeto14-drivenplant.herokuapp.com/chckout", object)
      .then((res) => {
        setIsLoading(false);
        //navigate
      });
  }

  return (
    <Section>
      <Top />
      {/* {renderCheckout ? ( */}
      <Article>
        <header>Carrinho de Compras</header>
        <div>
          <CartProducts cart={cart} setCart={setCart} />
        </div>
        <p>CPF</p>
        <input required />
        <p>Total (x intens): valor</p>
        <button onClick={handleCart}>
          {isLoading ? (
            <ThreeDots color="#FFFFFF" width="51px" height="13px" />
          ) : (
            <div>Fechar Pedido</div>
          )}
        </button>
      </Article>
      {/* ) : ("TESTE") */}
    </Section>
  );
}

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Article = styled.div`
  margin: 0 2vw;
  padding: 2%;
  border: 1px solid #aad2b4;

  display: flex;
  flex-direction: column;

  header {
    font-size: 30px;
    font-weight: 500;
    line-height: 36px;
    color: #1d1e18;
  }

  label {
  }
  input {
    width: 290px;
    height: 31px;
    background: rgba(166, 153, 153, 0.55);
    border-radius: 15px;
  }

  p {
    font-weight: 500;
    font-size: 20px;
  }

  button {
    width: 207px;
    height: 37px;
    background: #6b8f71;
    border-radius: 15px;
    margin: 5vh;
    margin-right: auto;
    margin-left: auto;

    font-weight: 400;
    font-size: 20px;
    color: #000000;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  button:hover {
    text-decoration: underline;
  }
`;
