import React from "react";
import { useNavigate } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import Menu from "./Menu";
import styled from "styled-components";

export default function Top() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  function logOff() {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    navigate("/");
  }

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <Header>
        <h1>DrivenPlant</h1>
        <div>
          <button onClick={() => navigate(-1)}>
            <RiArrowGoBackFill />
          </button>
          <p onClick={toggleMenu}>Produtos</p>
          <button onClick={() => navigate("/checkout")}>
            <FaShoppingCart />
          </button>
          <button onClick={logOff}>
            <FiLogOut />
          </button>
        </div>
      </Header>
      {isMenuOpen && (
        <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      )}
    </>
  );
}

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-weight: 600;
    font-size: 40px;
    margin-top: 2vh;
    margin-bottom: 2vh;
    line-height: 58px;
    color: #1d1e18;
  }

  div {
    width: 100%;
    height: 35px;
    margin-bottom: 5vh;
    background-color: #1d1e18;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  p {
    font-weight: 500;
    color: #aad2b4;
  }

  button {
    height: 35px;
    color: #aad2b4;
    background-color: #1d1e18;

    display: flex;
    align-items: center;
  }
`;
