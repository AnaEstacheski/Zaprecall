import React from 'react'
import FlashCard from './FlashCard'

export default function FlashCardList({ flashcards }) {
    const count = [1, 2, 3, 4]
    let randomCards = []

    count.map(() => {
        randomCards.push(Math.floor(Math.random() * flashcards.length))
    })

    return (
        <>

            {count.map((count, i) => {
                return <FlashCard flashcard={flashcards[randomCards[i]]} num={count} />
            })}

        </>
    )
}
