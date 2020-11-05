import React from 'react'

const Appselect = ({ apps }) => {
    const appIDs=[];
    
    {apps.map(app =>(
        appIDs.push(app.appID)
    ))}

    const uniqueappIDs= Array.from(new Set(appIDs));
    console.log(uniqueappIDs);

    //console.log(appIDs);
    return (
        <select>
            {uniqueappIDs.map(app =>(
                <option key={app} value={app}>{app}</option>
            ))}
        </select>
    )
}

export default Appselect;