import { useHistory } from 'react-router-dom'

const End = ({finishScore} ) => {
    const history = useHistory()
    const restart = ()=>{
      history.push("/")
    }
  
     return (
        <div>
            <h1 style={{color:"white"}}>finish</h1>
            <h2  style={{color:"white"}}>Score:{finishScore}</h2>
            <button onClick={restart} className="btn btn-danger">Restart Quiz</button>
        </div>
    )
}

export default End
