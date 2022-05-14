import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import styled from "styled-components";

export default function SignInPage() {
  const navigate = useNavigate();

  const [userLogin, setUserLogin] = useState({ email: "", password: "" });
  const [load, setLoad] = useState(false);

  function login(event) {
    event.preventDefault();

    //authenticação
    setLoad(true);
  }

  return (
    <Section>
      <h1>DrivenPlant</h1>
      <form onSubmit={login}>
        <input
          required
          type="email"
          value={userLogin.email}
          placeholder="E-mail"
          onInput={(e) => setUserLogin({ ...userLogin, email: e.target.value })}
          disabled={load}
        />
        <input
          required
          type="password"
          value={userLogin.password}
          placeholder="Senha"
          onInput={(e) =>
            setUserLogin({ ...userLogin, password: e.target.value })
          }
          disabled={load}
        />
        <button>
          {load ? (
            <ThreeDots color="#FFFFFF" width="51px" height="13px" />
          ) : (
            <div>Entrar</div>
          )}
        </button>
      </form>
      <Link to={"/signup"}>
        <p>Não tem uma conta? Cadastre-se aqui!</p>
      </Link>
    </Section>
  );
}

const Section = styled.div`
  margin-top: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    margin-top: 15vh;
    display: flex;
    flex-direction: column;
  }

  input {
    margin-bottom: 2%;
    width: 303px;
    height: 45px;
    left: 36px;
    top: 279px;

    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #666666;

    background: #ffffff;
    border: 1px solid #d5d5d5;
    box-sizing: border-box;
    border-radius: 5px;
  }

  input::placeholder {
    font-family: "Lexend Deca";
    font-weight: 400;
    font-size: 19.976px;
    color: #dbdbdb;
  }
`;
