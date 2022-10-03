import { useState } from "react"
import styled from "styled-components"
import seta from "../assets/img/seta_play.png"
import virar from "../assets/img/seta_virar.png"

export default function FlashCard({ flashcard, num }) {
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
                </OpenCard> :
                    <div></div>
            }


            {/* {(function () {
                switch (statecard) {
                    case 1:
                        return ( */}
            {/* <Closed>
                                <p>Pergunta {num}</p>
                                <img src={seta} onClick={() => setStateCard(2) }></img>
                            </Closed> */}
            {/* )
                }
            })} */}

            {/* {flashcard ? <ClosedCard flashcard={flashcard} num={num} /> : <OpenCard> {flashcard.question} </OpenCard>}  */}

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
`   