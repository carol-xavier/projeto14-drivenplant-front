import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import Top from "./../Components/Top";

export default function ThankYou() {
    const location = useLocation();
    const { status } = location.state;
    const navigate = useNavigate();

    return (
        <>
            <Top />
            <Article>
                <Section>
                    {status === 201 ? (
                        <div>
                            Seu pedido foi realizado com sucesso!<br />
                            Obrigada por escolher a DrivenPlant!
                        </div>
                    ) : (<div>
                        Ops! Algo deu errado. Tente novamente (:
                    </div>)}
                    <button onClick={() => navigate("/home")}>Tela Inicial</button>
                </Section>
            </Article>
        </>
    )
};


const Article = styled.div`
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Section = styled.div`
    width: 321px;
    height: 309px;
    padding: 5%;
    border-radius: 15px;
    background-color: #6B8F71;
    
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    text-align: center;

    div{
        color: #ffffff;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
    }

    button{
        width: 173px;
        height: 46px;
        margin-top: 10vh;
        cursor: pointer;
        background: #AAD2B4;
        border-radius: 15px;

        color: rgba(0, 0, 0, 0.55);
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
    }
    button:hover{
        text-decoration: underline;
    }
`;