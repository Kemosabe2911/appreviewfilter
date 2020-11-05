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
            {apps.map(app =>(
                <option key={app.id} value={app.appID}>{app.appID}</option>
            ))}
        </select>
    )
}

export default Appselect;