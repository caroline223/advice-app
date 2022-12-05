import React, {useState, useRef} from 'react'


function AdviceForm(){

    const [randomAdvice, setReandomAdvice] = useState('')
    const [query, setQuery] = useState('')
    const [message, setMessage] = useState('')


    const queryInput = useRef()

    const randomSubmit = () => {

        fetch('https://api.adviceslip.com/advice')

        .then((response) => {
            return response.json()
        })

        .then((completeData) => {
            console.log(completeData)
            setReandomAdvice(completeData.slip.advice)
        })

        .catch(error => {
            console.log(error)
        })

    }


    return(
        <div>
            <h2>Daily Piece of Advice</h2>
            <h3>Click Below to Read a Random Piece of Advice</h3>
            <button onClick={randomSubmit}>Click Me</button>
            <p>{randomAdvice}</p>
        </div>
    )



}

export default AdviceForm;