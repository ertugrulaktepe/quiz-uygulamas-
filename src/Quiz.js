import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Questions from './Questions.json'

const Quiz = () => {
    const [currQuestions,setCurrQuestions] = useState(0)
    const [score,Setscore] = useState(1)
    const history = useHistory()
    const finishQuiz = () =>{
        history.push("/finish")
    }
    
    const nextQuestions = (isCorrect)=>{
      if(isCorrect === true){
        setCurrQuestions(currQuestions +1 )
        Setscore(score +1 )
      }
      
    }
    const skipQuestions = ()=>{
        setCurrQuestions(currQuestions +1)
    }
    
   
    return (
        <div className="quiz-form">
            <h4>{score}/5</h4>
        <h1 className="question-text">{Questions[currQuestions].prompt}</h1>
        <div className="answer-section">
            {Questions[currQuestions].answerOptions.map((answerOptions)=>(
                <button onClick={()=>nextQuestions(answerOptions.isCorrect)} className="btn btn-success">{answerOptions.answer}</button>
            ))}
        </div>
        {currQuestions  === Questions.length -1 ? (
            <button onClick={finishQuiz} className="btn btn-danger">Finish Quiz</button>
        ):(
            <button className="btn btn-warning" onClick={skipQuestions}>Next questions</button>
        )}
     </div>
     

    )
}

export default Quiz
