import React, {useState, useRef} from 'react'


function AdviceForm(){

    const [randomAdvice, setReandomAdvice] = useState("")
    const [query, setSearchQuery] = useState("")
    const [message, setMessage] = useState("")


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

    const searchSubmit = () => {

        const query = queryInput.current.value
        const message = "Sorry! Can't help with that!"
       
       
        fetch(`https://api.adviceslip.com/advice/search/${query}`)

        .then((response) => {
            return response.json()
        })

        .then((completeData) => {
            console.log(completeData)
            completeData ? setSearchQuery(completeData.slips[0].advice) : setMessage(message)

            // if(completeData === true){
            //     setSearchQuery(completeData.slips[0].advice)
            // } else{
            //    setMessage(message)
            // }
        })

        .catch((message) => {
            console.log("Sorry! Can't help with that!")
            setMessage(message.text)
        })
    }


    return(
        <div>
            <h2>Daily Piece of Advice</h2>
            <h3>Click Below to Read a Random Piece of Advice</h3>
            <button onClick={randomSubmit}>Click Me</button>
            <p>{randomAdvice}</p>

            <div>
                <h3>Type a Keyword Below to Search For Advice</h3>
                <input
                    ref={queryInput}
                    required
                    type="text"
                />&nbsp;
                    <button onClick={searchSubmit} type="submit">Results</button>
                <p style={{textAlign: 'center'}}>{query ? query : message}</p>
            </div>
        </div>
    )



}

export default AdviceForm;