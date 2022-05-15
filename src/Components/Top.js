import { useNavigate } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import styled from "styled-components";

export default function Top() {
  const navigate = useNavigate();

  function logOff() {
    localStorage.removeItem("token")
    navigate("/");
  };

  return (
    <Header>
      <h1>DrivenPlant</h1>
      <div>
        <button onClick={() => navigate(``)}>
          <RiArrowGoBackFill />
        </button>
        <p>Produtos</p>
        <button onClick={() => navigate(`/checkout`)}>
          <FaShoppingCart />
        </button>
        <button onClick={logOff}>
          <FiLogOut />
        </button>
      </div>
    </Header>
  );
};

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1{
    font-weight: 400;
    font-size: 48px;
    margin-top: 2vh;
    margin-bottom:2vh;
    line-height: 58px;
    color: #1D1E18;
  }

  div{
    width:100%;
    height: 35px;
    margin-bottom: 5vh;
    background-color: #1D1E18;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  p{
    color: #AAD2B4;
  }

  button{
    height: 35px;;
    color: #AAD2B4;
    background-color: #1D1E18;

   display: flex;
   align-items: center;
  }
`;