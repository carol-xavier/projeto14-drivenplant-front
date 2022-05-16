import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { RiCloseCircleFill } from "react-icons/ri";

export default function Menu({ isMenuOpen, setIsMenuOpen }) {
  const navigate = useNavigate();

  return (
    isMenuOpen && (
      <Container>
        <Content>
          <RiCloseCircleFill
            className="closeMenuIcon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          <h2>Categorias</h2>
          <div>
            <button onClick={() => navigate("/home/suculenta")}>
              Suculentas
            </button>
            <button onClick={() => navigate("/home/paisagismo")}>
              Paisagismo
            </button>
          </div>
        </Content>
      </Container>
    )
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 1rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  background-color: #fff;

  h2 {
    padding: 2rem 2rem 0.5rem;
  }

  div {
    display: flex;
    flex-direction: column;
    padding: 1rem;

    button {
      margin-bottom: 0.5rem;
      font-weight: 500;
    }
  }

  .closeMenuIcon {
    font-size: 30px;
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;
