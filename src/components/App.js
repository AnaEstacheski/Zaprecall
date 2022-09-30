import GlobalStyle from "../assets/styles/GlobalStyle"
import WelcomeScreen from "./WelcomeScreen"
import QuestionsList from "./QuestionsList"
import { useState } from "react"

export default function App() {
    const [startRecall, setStartRecall] = useState(false);

    return (
        <>
            {startRecall ? <QuestionsList /> : <WelcomeScreen startRecall={startRecall} setStartRecall={setStartRecall} />}
           
        </>
    )
}