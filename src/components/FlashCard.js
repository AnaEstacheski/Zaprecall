import { useState } from "react"
import styled from "styled-components"
import seta from "../assets/img/seta_play.png"
import virar from "../assets/img/seta_virar.png"
import erro from "../assets/img/icone_erro.png"
import quase from "../assets/img/icone_quase.png"
import certo from "../assets/img/icone_certo.png"

export default function FlashCard({ flashcard, num, answered, setAnswered }) {
    const [stateCard, setStateCard] = useState(1)
    

    return (
        <>
            {stateCard == 1 ? 
                <Closed>
                    <p>Pergunta {num}</p>
                    <img src={seta} onClick={() => setStateCard(2)}></img>
                </Closed> :
            stateCard == 2 ? 
                <OpenCard> 
                    {flashcard.question}
                    <img src={virar} onClick={() => setStateCard(3)}></img>
                </OpenCard> :
            stateCard == 3 ?
                <OpenCard>
                    {flashcard.answer}
                    <Buttons>
                        <Button className="red" onClick={() => {setStateCard(4); setAnswered(answered+1)}}>Não lembrei</Button>
                        <Button className="yellow" onClick={() => {setStateCard(5); setAnswered(answered+1)}}>Quase não lembrei</Button>
                        <Button className="green" onClick={() => {setStateCard(6); setAnswered(answered+1)}}>Zap!</Button>
                    </Buttons>
                </OpenCard> :
            stateCard == 4 ?
                <Closed>
                    <p className="red">Pergunta {num}</p>
                    <img src={erro}></img>
                </Closed> :
            stateCard == 5 ?
            <Closed>
                <p className="yellow">Pergunta {num}</p>
                <img src={quase}></img>
            </Closed> :
            stateCard == 6 ?
            <Closed>
                <p className="green">Pergunta {num}</p>
                <img src={certo}></img>
            </Closed> :
            <div></div>
            }
        </>
    )
}

const OpenCard = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img {
        position: absolute;
        bottom: 10px;
        right: 10px;
      }
`
const Closed = styled.div`

    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
    }

    img {
        cursor: pointer;
    }

    .red {
        color: red;
        text-decoration: line-through;
    }

    .yellow {
        color: yellow;
        text-decoration: line-through;
    }

    .green {
        color: green;
        text-decoration: line-through;
    }
`

const Buttons = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 20px;

    .red {
        background-color: red;
    }

    .yellow {
        background-color: yellow;
    }

    .green { 
    background-color: green;
    }
`
const Button = styled.div`
    width: 90px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    background: blue;
    border-radius: 5px;
    border: 1px solid blue;
    padding:5px;

    red {
        background-color: red;
    }
`