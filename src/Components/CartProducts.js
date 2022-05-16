import React from "react";
import {api} from "./../assets/api";
import styled from "styled-components";


export default function CartProducts(props) {
  const { cart, setCart, setTotal, formatter } = props;

  const token = localStorage.getItem("token");

  React.useEffect(() => {
    let sum = 0;  
    cart.map((prod) => {return sum += prod.price});
    setTotal(sum);
  }, [cart,setTotal]);

  function deleteProduct(id) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api
      .put("/checkout", {id}, config)
      .then(() => updateCart(id))
      .catch(() =>
        alert("Não foi possível deletar esse item. Tente novamente mais tarde")
      );
  };

  function updateCart(id){
    const newCart = cart.filter((prod) => prod.id !== id);
    setCart(newCart);
  };

  return cart.map((product,index) => {
    const { id, name, image, info, price } = product;

    return (
      <Section key={index}>
        <img src={image} alt={name} />
        <article>
          <h3>{name}</h3>
          <div>{info}</div>
          <h4>{formatter.format(price)}</h4>
          <p onClick={() => deleteProduct(id)}>Delete</p>
        </article>
      </Section>
    );
  });
};

const Section = styled.div`
  margin-top: 2vh;
  display:flex;
  justify-content: space-around;

  img{
    width: 61px;
    height: 71px;
  }

  article{
    display: flex;
    flex-direction: column;
    position: relative;
  }

  h3{
    font-weight: 600;
    font-size: 20px;
    line-height: 23px;
  }
  
  div{
    width: 230px;
    height: 20px;
    overflow-y: auto;
    font-size: 16px;
    line-height: 18px;
  }

  h4{
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
  }

 p{
   position:absolute;
   right: 0;
   bottom: 0;
   font-size: 12px;
   color:blue;
 }

`;