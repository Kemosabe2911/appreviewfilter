import React, { useState } from 'react';
import review from './data/review.json';
import Appselect from './components/Appselect';
import DisplayApp from './components/result';
import './App.css';

function App() {
  //console.log(review[0].appID);
  //console.log(review); 
  //const [result,setResult] = useState([]);
  const [appselected, setAppselected] = useState(null);
  const [timeorder, setTimeorder]= useState('newest');

    const handleAppselected = (e) =>{
      e.preventDefault();
        //console.log(e.target.value);
        setAppselected(e.target.value);
        //console.log(appselected);
    }
    
    const handleTimeorder = (e) =>{
      e.preventDefault();
        //console.log(e.target.value);
        setTimeorder(e.target.value);
        //console.log(appselected);
    }

    console.log(appselected);
    //console.log(timeorder);
  return (
      <div className="container">
        <div className="top-container">
          <Appselect apps={review} 
          appselected={appselected} 
          timeorder={timeorder} 
          handleAppselected={handleAppselected} 
          handleTimeorder={handleTimeorder}/>
        </div>
        <div className="left-container">

        </div>
        <div className="right-container">
          <DisplayApp appselected={appselected} timeorder={timeorder} />
        </div>
      </div>
  );
}

export default App;
