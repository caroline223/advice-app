import React, {useState, useRef} from 'react'


function AdviceForm(){

    const [randomAdvice, setRandomAdvice] = useState("")
    const [query, setSearchQuery] = useState("")
    // const [message, setMessage] = useState("")


    const queryInput = useRef()
    
    const randomSubmit = () => {

        fetch('https://api.adviceslip.com/advice')

        .then((response) => {
            return response.json() 
        })

        .then((completeData) => {
            console.log(completeData)
            setRandomAdvice(completeData.slip.advice)
        })

        .catch(error => {
            console.log(error)
        })

    }

    const clearRandomInfo = () => {
        setRandomAdvice('')
    }


    const searchSubmit = () => {

        const query = queryInput.current.value
       
        fetch(`https://api.adviceslip.com/advice/search/${query}`)

        .then((response) => {
            return response.json()
        })

        .then((completeData) => {
            console.log(completeData)
            setSearchQuery(completeData.slips[0].advice)    
        })

        .catch((error) => {
            console.log(error)
            setSearchQuery("Sorry! Can't help with that!")  
        })
    }

    const clearSearchInfo = () => {
        query.slice(0)
        setSearchQuery('')
    }


    return(
        <div>
            <br />
            <h3>Are you experiencing stress? Doubt? Unsure of your next move?</h3>
            <h3>Click Below to Read Different Pieces of Advice</h3>
            <p>{randomAdvice}</p>
            <br />
            <div style={{textAlign: 'center'}}>
                <button onClick={randomSubmit}>Click Me</button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={clearRandomInfo} type="submit">Clear</button>
            </div>
           
            <br /><br /><br /><br /><br />
            <div>
            <h3>Are you looking for some advice that is a bit more specific to you?</h3>
                <h4>Type a Keyword Below to Search For Advice</h4>
                    <div style={{textAlign: 'center'}}>
                        <input
                            ref={queryInput}
                            required
                            type="text"
                        />
                    </div>
                &nbsp;
                <div style={{textAlign: 'center'}}>
                    <button onClick={searchSubmit} type="submit">Result</button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={clearSearchInfo} type="submit">Clear</button>
                </div>
                <p>{query}</p>
            </div>
        </div>
    )



}

export default AdviceForm;