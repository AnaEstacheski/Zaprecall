import React from 'react'
import FlashCard from './FlashCard'

export default function FlashCardList({ flashcards }) {
    const count = [1, 2, 3, 4]
    let randomCards = []

    // function sortQuestions() {
    //     let averificar = Math.floor(Math.random() * flashcards.length)
    //     if (!averificar.includes(flashcards)) {
    //         randomCards.push(averificar)
    //         return averificar
    //     } else {
    //         return sortQuestions()
    //     }
    // }

    count.map(() => {
        randomCards.push(Math.floor(Math.random() * flashcards.length))
    })

    return (
        <>

            {/* for (let i = 0; i < ; i++ ) {
            
        } */}
            {count.map((count, i) => {
                return <FlashCard flashcard={flashcards[randomCards[i]]} num={count} />
            })}

        </>
    )
}
