import React from 'react';
import review from '../data/review.json';

const result = ({ appselected }) => {
    const results= review.filter( app => app.appID === appselected);
    console.log(results);
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