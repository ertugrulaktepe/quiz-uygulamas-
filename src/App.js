
import { useState } from 'react';
import End from './End'
import Quiz from './Quiz'
import './style.css'
function App() {
 const [pageWiev, setPageWiev] = useState("quiz")
  return (
    <div className="App">
      {pageWiev === "quiz" ? (
          <Quiz pageWiev={pageWiev} setPageWiev={setPageWiev}/>
      ):(
          <End/>
      )}
    
    
    </div>
  );
}

export default App;
