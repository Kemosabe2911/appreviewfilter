import React, { useState } from 'react';
import review from './data/review.json';
import Appselect from './components/Appselect';
import result from './components/result';
import './App.css';

function App() {
  //console.log(review[0].appID);
  //console.log(review); 
  const [result,setResult] = useState([]);
  const [appselected, setAppselected] = useState(null);

    const handleAppselected = (e) =>{
      e.preventDefault();
        //console.log(e.target.value);
        setAppselected(e.target.value);
        //console.log(appselected);
    }
  
    console.log(appselected);
  return (
      <div className="container">
        <div className="top-container">
          <Appselect apps={review} appselected={appselected} handleAppselected={handleAppselected} />
        </div>
        <div className="left-container">

        </div>
        <div className="right-container">
          <result appselected={appselected} />
        </div>
      </div>
  );
}

export default App;
