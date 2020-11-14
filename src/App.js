import React, { useState } from 'react';
import review from './data/review.json';
import Appselect from './components/Appselect';
import DisplayApp from './components/result';
import './App.css';

function App() {
  //console.log(review[0].appID);
  //console.log(review); 
  const [result,setResult] = useState(review);
  const [appselected, setAppselected] = useState(null);
  const [timeorder, setTimeorder]= useState('newest');
  const [currentPage, setCurrentPage]= useState(1);
  const [postsPerPage, setPostsPerPage]= useState(10);

    const handleAppselected = (e) =>{
      e.preventDefault();
        //console.log(e.target.value);
        setAppselected(e.target.value);
        setResult(review.filter( app => app.appID === e.target.value));
        //console.log(appselected);
    }
    
    console.log(result);
    const handleTimeorder = (e) =>{
      e.preventDefault();
        //console.log(e.target.value);
        setTimeorder(e.target.value);
        if(e.target.value === 'newest'){
          setResult(result.sort((a, b) => b.reviewDate < a.reviewDate));
          console.log(result);
        }
        if(e.target.value === 'oldest'){
          setResult(result.sort((a, b) => a.reviewDate < b.reviewDate));
          console.log(result);
        }
        //console.log(appselected);
    }
    console.log(timeorder);
    console.log(appselected);

    //get current posts
    const indexofLastPost = currentPage * postsPerPage;
    const indexofFirstPost = indexofLastPost - postsPerPage;
    const currentResults= result.slice(indexofFirstPost,indexofLastPost);



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
        <div className="output-container">
          <div className="left-container">
            Hello
          </div>
          <div className="right-container scrollbar">
            <DisplayApp result={result} />
          </div>
        </div>
      </div>
  );
}

export default App;
