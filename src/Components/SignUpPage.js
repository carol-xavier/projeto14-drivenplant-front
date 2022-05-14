import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";

export default function SignUpPage() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = React.useState(false);
  const [signUpInfos, setSignUpInfos] = React.useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleSignUp = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const { name, email, password, password_confirmation } = signUpInfos;

    if (password !== password_confirmation) {
      alert("As senhas não coincidem! Por favor, digite novamente.");
      setIsLoading(false);
      return;
    }

    axios
      .post("", { name, email, password })
      .then(() => navigate("/home"))
      .catch(() => alert("Não foi possível criar a conta. Tente novamente!"));
  };

  return (
    <Container>
      <Content>
        <Title>DrivenPlant</Title>
        <Form onSubmit={handleSignUp}>
          <input
            type="text"
            placeholder="Nome"
            value={signUpInfos.name}
            onChange={(e) =>
              setSignUpInfos({ ...signUpInfos, name: e.target.value })
            }
            disabled={isLoading}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={signUpInfos.email}
            onChange={(e) =>
              setSignUpInfos({ ...signUpInfos, email: e.target.value })
            }
            disabled={isLoading}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={signUpInfos.password}
            onChange={(e) =>
              setSignUpInfos({ ...signUpInfos, password: e.target.value })
            }
            disabled={isLoading}
            required
          />
          <input
            type="password"
            placeholder="Confirme a sua senha"
            value={signUpInfos.password_confirmation}
            onChange={(e) =>
              setSignUpInfos({
                ...signUpInfos,
                password_confirmation: e.target.value,
              })
            }
            disabled={isLoading}
            required
          />
          <button>
            {isLoading ? (
              <ThreeDots color="#FFFFFF" width="51px" height="13px" />
            ) : (
              "Cadastrar"
            )}
          </button>
        </Form>
        <Link to={"/signin"}>
          <p>Já tem uma conta? Faça login aqui!</p>
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
