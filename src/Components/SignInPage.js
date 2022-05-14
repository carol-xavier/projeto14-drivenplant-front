import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import styled from "styled-components";

export default function SignInPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [userLogin, setUserLogin] = useState({ email: "", password: "" });

  function handleLogin(event) {
    event.preventDefault();
    setIsLoading(true);

    const { email, password } = userLogin;

    axios
      .post("http://localhost:5000/signin", { email, password })
      .then(() => navigate("/home"))
      .catch((err) => console.log(err));
  }

  return (
    <Container>
      <Content>
        <Title>DrivenPlant</Title>
        <Form onSubmit={handleLogin}>
          <input
            required
            type="email"
            value={userLogin.email}
            placeholder="E-mail"
            onInput={(e) =>
              setUserLogin({ ...userLogin, email: e.target.value })
            }
            disabled={isLoading}
          />
          <input
            required
            type="password"
            value={userLogin.password}
            placeholder="Senha"
            onInput={(e) =>
              setUserLogin({ ...userLogin, password: e.target.value })
            }
            disabled={isLoading}
          />
          <button>
            {isLoading ? (
              <ThreeDots color="#FFFFFF" width="51px" height="13px" />
            ) : (
              <div>Entrar</div>
            )}
          </button>
        </Form>
        <Link to={"/signup"}>
          <p>Não tem uma conta? Cadastre-se aqui!</p>
        </Link>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #6b8f71;
`;

const Content = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  gap: 1rem;

  a {
    width: 80%;
    max-width: 1020px;
    margin: 0 auto;

    text-align: center;
    font-size: 14px;
    font-weight: 600;
    color: #ffffff;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Title = styled.h1`
  width: 80%;
  max-width: 1020px;
  margin: 0 auto;
  text-align: center;
  font-weight: 600;
  color: #fff;
`;

const Form = styled.form`
  width: 80%;
  max-width: 1020px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  input {
    width: 100%;
    background-color: #d9fff5;
    color: #91aba4;
    font-weight: 500;
    border-radius: 0.2rem;
  }

  button {
    width: 100%;
    color: #fefffe;
    font-weight: 500;
    background-color: #1d1e18;
    border-radius: 0.2rem;
    cursor: pointer;
  }
`;
