import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Top from "./../Components/Top";

export default function ThankYou() {
    // const {res} = props;
    const navigate = useNavigate();

    return (
        <>
            <Top />
            <Article>
                <Section>
                    {/* {res === 200 ? ( */}
                    <div>
                        Seu pedido foi realizado com sucesso!
                        Obrigada por escolher a DrivenPlant!
                    </div>
                    {/* ) : ( */}
                    <div>
                        Ops! Algo deu errado. Tente novamente (:
                    </div>)
                    <button onClick={() => navigate("/home")}>Tela Inicial</button>
                </Section>
            </Article>
        </>
    )
};

const Article = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Section = styled.div`
    width: 321px;
    height: 309px;
    padding: 2%;
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
        left: 106px;
        top: 418px;
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
`


