import React from 'react';

const result = ({ result }) => {
    /*
    const results= review.filter( app => app.appID === appselected);
    console.log(results);
    console.log(timeorder);
    if(timeorder === 'newest'){
        const sortedActivities = results.sort((a, b) => b.reviewDate - a.reviewDate);
        //console.log(sortedActivities);
    }
    if(timeorder === 'oldest'){
        const sortedActivities = results.sort((a, b) => a.reviewDate - b.reviewDate);
        //console.log(sortedActivities);
    }*/
    //const sorted = results.sort((a, b) => b[reviewDate] - a[reviewDate]);
    //console.log(sorted);
    //setData(sorted);
    return (
        <div className="result">
            {result.map( data =>(
            <div className="res-container">
                    <h3>{data.appStoreName}</h3>
                    <li>{data.rating}</li>
                    <li>{data.reviewDate}</li>
                    <li>{data.reviewText}</li>
                    <li>by {data.reviewUserName}</li>
                    <li>{data.countryName}</li>
                    <li>{data.rating}</li>
                    <li>{data.version}</li>
            </div>    
            ))}
        </div>
    )
}

export default result;