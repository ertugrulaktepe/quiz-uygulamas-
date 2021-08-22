import React, { useState } from 'react'
import Questions from './Questions.json'

const Quiz = () => {
    const [currQuestions,setCurrQuestions] = useState(0)
    const [score,Setscore] = useState(1)
    
    const nextQuestions = (isCorrect)=>{
      if(isCorrect === true){
        setCurrQuestions(currQuestions +1 )
        Setscore(score +1 )
      }
      
    }
   

    return (
        <div className="quiz-form">
            <h4>{score}/3</h4>
        <h1 className="question-text">{Questions[currQuestions].prompt}</h1>
        <div className="answer-section">
            {Questions[currQuestions].answerOptions.map((answerOptions)=>(
                <button onClick={()=>nextQuestions(answerOptions.isCorrect)} className="btn btn-success">{answerOptions.answer}</button>
            ))}
        </div>
        
        </div>
     

    )
}

export default Quiz