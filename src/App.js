import React, { useState } from 'react';
import review from './data/review.json';
import Appselect from './components/Appselect';
import './App.css';

function App() {
  //console.log(review[0].appID);
  console.log(review);
  const [result,setResult] = useState([]);

  return (
      <div className="container">
        <div className="top-container">
          <Appselect apps={review} />
        </div>
      </div>
  );
}

export default App;
