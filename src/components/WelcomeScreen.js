import React from "react"
import styled from "styled-components"
import logo from "../assets/img/logo.png"

export default function WelcomeScreen({ startRecall, setStartRecall }) {

    function click() {
        setStartRecall(!startRecall)
    }

    return (
        <MainContainer>
            <img src={logo} alt="ZapRecall" />
            <h1>ZapRecall</h1>
            <button onClick={click}>Iniciar Recall</button>
        </MainContainer>
    )
}


const MainContainer = styled.div`   
    background-color: #FB6B6B;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  
    img {
        width: 136px;
        height: 161px
        margin-bottom: 10px;
    }

    h1 {
        font-family: 'Righteous', cursive;
        color: #ffffff;
        font-size: 36px;
        font-weight: 400;
        line-height: 44px;
        margin-bottom: 30px;
    }

    button {
        background-color: #FFFFFF;
        color: #D70900;
        width: 246px;
        height: 54px;
        font-family: 'Recursive', sans-serif;
        font-size: 18px;
        border: 1px solid #D70900;        
        border-radius: 5px;        
        box-shadow: 0px 4px 4px 0px #00000026;
        cursor: pointer;
    }
`