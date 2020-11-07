import React, { useState } from 'react';
import review from '../data/review.json';

const result = ({ appselected, timeorder }) => {
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
    }
    //const sorted = results.sort((a, b) => b[reviewDate] - a[reviewDate]);
    //console.log(sorted);
    //setData(sorted);
    return (
        <div className="result">
            {results.map( data =>(
            <div>
                <h3>{data.id}</h3>
                <ul>
                    <li>{data.id}</li>
                    <li>{data.appID}</li>
                    <li>{data.appStoreName}</li>
                    <li>{data.rating}</li>
                </ul>
            </div>    
            ))}
        </div>
    )
}

export default result;