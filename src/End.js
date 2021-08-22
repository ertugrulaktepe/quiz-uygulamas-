import React from 'react'
import { useHistory } from 'react-router-dom'

const End = () => {
    const history = useHistory()
    const restart = ()=>{
      history.push("/")
    }
     return (
        <div>
            <h1>finish</h1>
            <button onClick={restart} className="btn btn-danger">Restart Quiz</button>
        </div>
    )
}

export default End
