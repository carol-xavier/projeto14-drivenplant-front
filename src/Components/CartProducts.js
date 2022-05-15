import React from "react";
// import axios from "axios";
// import Checkout from "../pages/Checkout";

export default function CartProducts(props) {
  const { cart } = props;

<<<<<<< HEAD
    function deleteProduct(event) { 
        event.preventDefault();

        const token = localStorage.getItem("token");
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
=======
  // function deleteProduct(event) {
  //   event.preventDefault();
  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   };
>>>>>>> 853330ebd116e0723c81f134ef7a572054512037

  //   axios
  //     .put("https://projeto14-drivenplant.herokuapp.com/chckout", config)
  //     .then(() => Checkout)
  //     .catch(() =>
  //       alert("Não foi possível deletar esse item. Tente novamente mais tarde")
  //     );
  // }

<<<<<<< HEAD
       return cart.map((product) => {
            const { id, name, image, info, price } = product;

            return <div key={id}>
                <img src={image} />
                <div>
                    <h3>{name}</h3>
                    <div>{info}</div>
                    <h4>{price}</h4>
                    <p onClick={deleteProduct}>Delete</p>
                </div>
            </div>

        });
};
=======
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
>>>>>>> 853330ebd116e0723c81f134ef7a572054512037
