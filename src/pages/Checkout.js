import React from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { api } from "./../assets/api";
import styled from "styled-components";

import Top from "./../Components/Top";
import CartProducts from "./../Components/CartProducts";


export default function Checkout() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = React.useState(false);
  const [renderCheckout, setRenderCheckout] = React.useState(false);
  const [CPF, setCPF] = React.useState("");
  const [cart, setCart] = React.useState();
  const [total, setTotal] = React.useState(0);

  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  React.useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    };

    api
      .get("/cart", config)
      .then((res) => {
        setCart(res.data);
        setRenderCheckout(true);
      })
      .catch((err) => {
        alert("Houve um erro ao buscar os produtos. Tente mais tarde!")
      });
  }, [token]);

  function handleCart(event) {
    event.preventDefault();
    setIsLoading(true);

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    };

    const object = { items: cart, email, CPF };

    api
      .post("/checkout", object, config)
      .then((res) => {
        setIsLoading(false);
        const { status } = res;
        navigate("/thankyou", { state: { status } });
      })
      .catch((err) => {
        alert("Houve um erro ao finalizar o pedido. Tente mais tarde!");
        setIsLoading(false);
      });
  };

  return (
    <Section>
      <Top />
      {renderCheckout ? (
        <Article>
          <header>Carrinho de Compras</header>
          <List>
            <CartProducts
              cart={cart}
              setCart={setCart}
              setTotal={setTotal}
              formatter={formatter} />
          </List>
          <h5>CPF</h5>
          <input required onInput={(e) => {
            setCPF(e.target.value);
          }} />
          <h5>Total ({cart.length} intens): {formatter.format(total)}</h5>
          <button onClick={handleCart}>
            {isLoading ? (
              <ThreeDots color="#FFFFFF" width="51px" height="13px" />
            ) : (
              <div>Fechar Pedido</div>
            )}
          </button>
        </Article>
      ) : (
        <div>Carregando</div>
      )}
    </Section>
  );
}

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Article = styled.div`
  height: 77vh;
  margin: 0vh 2vw;
  margin-bottom: 2vh;
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

  input {
    width: 290px;
    height: 31px;
    margin-bottom: 2vh;
    background: rgba(166, 153, 153, 0.55);
    border-radius: 15px;
  }

  h5 {
    font-weight: 600;
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

const List = styled.div`
  width: 330px;
  height: 40vh;
  margin-bottom: 2vh;
  overflow-y: scroll;
`;