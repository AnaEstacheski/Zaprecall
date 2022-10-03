import { useState } from "react"
import styled from "styled-components"
import FlashCardList from "./FlashCardList"
import DECKREACT from "../aux/decks"
import logo from "../assets/img/logo.png"

export default function GameScreen() {
    const [flashcards, setFlashcards] = useState(DECKREACT)
    const [answered, setAnswered] = useState(0)

    return (
        <>
            <ScreenContainer>
                <LogoContainer>
                    <img src={logo} alt="ZapRecall"></img>
                    <h1>ZapRecall</h1>
                </LogoContainer>
                <FlashCardList flashcards={flashcards} answered={answered} setAnswered={setAnswered}/>
            </ScreenContainer>
            <Footer answered={answered}/>
        </>
    )

}

function Footer({ answered }) {
    return (
        <Bottom>
            {answered}/4 CONCLUÍDOS
        </Bottom>

    )

}

const ScreenContainer = styled.div`
    background-color: #FB6B6B;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  
    padding-bottom: 250px;
`
const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 40px 0 20px 0;
    
    img {
        width: 52px;
    }

    h1 {
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        color: #FFFFFF;
        margin-left: 20px;
    }
`

const Bottom = styled.div`
    width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;
`
