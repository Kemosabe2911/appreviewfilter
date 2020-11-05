import React, { useState } from 'react';
import review from './data/review.json';
import Appselect from './components/Appselect';
import './App.css';

function App() {
  //console.log(review[0].appID);
  //console.log(review);
  const [result,setResult] = useState([]);
  const [appselected, setAppselected] = useState('');

  const handleAppselected = (e) =>{
    setAppselected(e.target.value);
    console.log(appselected);
  }

  return (
      <div className="container">
        <div className="top-container">
          <Appselect apps={review} appselected={appselected} handleAppselected={handleAppselected} />
        </div>
      </div>
  );
}

export default App;
