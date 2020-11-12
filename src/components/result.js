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
                <div className="line-1">
                    <span className="box"></span>
                    <h3 className="store-name">{data.appStoreName}</h3>
                    <h3>{data.reviewHeading}</h3>
                    <h4>{data.rating}</h4>
                </div>
                <div className="line-2">
                    <p>{data.reviewText}</p>
                </div>
                <div className="line-3">
                    <p>by {data.reviewUserName}</p>
                    <p>{data.reviewDate}</p>
                    <p>{data.countryName}</p>
                    <p>{data.version}</p>
                </div>
            </div>    
            ))}
        </div>
    )
}

export default result;