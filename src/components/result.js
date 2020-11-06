import React from 'react';
import review from '../data/review.json';

const result = ({ appselected }) => {
    const results= review.filter( app => app.appID === appselected);
    console.log(results);
    return (
        <div className="result">
            
        </div>
    )
}

export default result;