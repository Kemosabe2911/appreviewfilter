import React, { useState } from 'react';
import Select from "react-select";
import review from './data/review.json';
//import Appselect from './components/Appselect';
import './App.css';

function App() {
  //console.log(review[0].appID);
  //console.log(review);
  const [result,setResult] = useState([]);
  const [appselected, setAppselected] = useState(null);

  const appIDs=[];
    
    {review.map(app =>(
        appIDs.push(app.appID)
    ))}

  const handleAppselected = (e) =>{
    console.log(appselected);
    setAppselected(e.target.value);
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
