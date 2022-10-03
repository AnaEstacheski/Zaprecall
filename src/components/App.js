import GlobalStyle from "../assets/styles/GlobalStyle"
import WelcomeScreen from "./WelcomeScreen"
import GameScreen from "./GameScreen"
import { useState } from "react"

export default function App() {
    const [startRecall, setStartRecall] = useState(false);

    return (
        <>
            {startRecall ? <GameScreen /> : <WelcomeScreen startRecall={startRecall} setStartRecall={setStartRecall} />}

        </>
    )
}