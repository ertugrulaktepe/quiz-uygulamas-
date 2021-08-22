
import { useState } from 'react';
import End from './End'
import Quiz from './Quiz'
import './style.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
function App() {

  return (
    <div className="App">
     <Router>
      <Route exact path="/" render={()=><Quiz/>}/>
      <Route path="/finish"component={End}/>
     </Router>
    </div>
  );
}

export default App;
