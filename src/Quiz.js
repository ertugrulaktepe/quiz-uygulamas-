import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Questions from './Questions.json'

const Quiz = ({finishScore, setFinishScore}) => {
    const [currQuestions,setCurrQuestions] = useState(0)
    const [score,Setscore] = useState(1)
    const history = useHistory()
    const finishQuiz = () =>{
        history.push("/finish")
    }
    
    const nextQuestions = (isCorrect,point)=>{
      if(isCorrect === true){
        setCurrQuestions(currQuestions +1 )
        Setscore(score +1 )
        setFinishScore(finishScore + point)
      }
    }
    const skipQuestions = ()=>{
        setCurrQuestions(currQuestions +1)
    }
    const finalQuestion = ()=>{
        if(currQuestions === Questions.length){
          alert("sınavı bitirdiniz")
          finishQuiz()
        }
    }
    finalQuestion()
   
    return (
        <div className="quiz-form">
            <h4>{score}/{Questions.length}</h4>
        <h1 className="question-text">{Questions[currQuestions].prompt}</h1>
        <div className="answer-section">
            {Questions[currQuestions].answerOptions.map((answerOptions)=>(
                <button key={answerOptions.point} onClick={()=>nextQuestions(answerOptions.isCorrect, answerOptions.point)} className="btn btn-success">{answerOptions.answer}</button>
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
