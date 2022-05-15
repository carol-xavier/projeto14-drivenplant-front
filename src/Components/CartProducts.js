import React from "react";
// import axios from "axios";
// import Checkout from "../pages/Checkout";

export default function CartProducts(props) {
  const { cart } = props;

  // function deleteProduct(event) {
  //   event.preventDefault();
  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   };

  //   axios
  //     .put("https://projeto14-drivenplant.herokuapp.com/chckout", config)
  //     .then(() => Checkout)
  //     .catch(() =>
  //       alert("Não foi possível deletar esse item. Tente novamente mais tarde")
  //     );
  // }

  React.useEffect(() => {
    cart.map((product) => {
      const { id, name, image, info, price } = product;

      return (
        <div key={id}>
          <img src={image} alt={name} />
          <div>
            <h3>{name}</h3>
            <div>{info}</div>
            <h4>{price}</h4>
            {/* <p onClick={deleteProduct}>Delete</p> */}
          </div>
        </div>
      );
    });
  }, [cart]);
}
