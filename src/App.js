import { UserContext } from './context/QuizContext'
import End from './End'
import Quiz from './Quiz'
import './style.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { useState } from 'react'
function App() {
  const [finishScore, setFinishScore] = useState(0)

  return (
    <UserContext.Provider>
       <div className="App">
     <Router>
      <Route exact path="/" render={()=><Quiz finishScore={finishScore} setFinishScore={setFinishScore}/>}/>
      <Route path="/finish"render={()=> <End finishScore={finishScore} />}/>
     </Router>
    </div>
    </UserContext.Provider>
   
  );
}

export default App;
