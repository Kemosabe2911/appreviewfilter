import React, { useState, useEffect } from 'react';
import review from './data/review.json';
import Appselect from './components/Appselect';
import Pagination from './components/Pagination';
import SearchApp from './components/SearchApp';
import DisplayApp from './components/result';
import './App.css';

function App() {
  //console.log(review[0].appID);
  //console.log(review); 
  const [result,setResult] = useState(review);
  const [appselected, setAppselected] = useState(null);
  const [timeorder, setTimeorder]= useState('newest');
  const [currentPage, setCurrentPage]= useState(1);
  const [postsPerPage, setPostsPerPage]= useState(20);
  const [searchTerm, setSearchTerm] = useState('');

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

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    //Search Filter
    const searchResult = (e) =>{
      e.preventDefault();
      setSearchTerm(e.target.value);
    }

    React.useEffect(() => {
      const results = result.filter(data =>
        data.reviewHeading.toLowerCase().includes(searchTerm)
      );
      setResult(results);
    }, [searchTerm]);


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
            <SearchApp searchResult={searchResult} />
          </div>
          <div className="right-container scrollbar">
            <DisplayApp result={currentResults} />
            <Pagination postsPerPage={postsPerPage} totalPosts={result.length} paginate={paginate} />
          </div>
        </div>
      </div>
  );
}

export default App;
