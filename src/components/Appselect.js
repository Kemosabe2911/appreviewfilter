import React, { useState } from 'react';

const Appselect = ({ apps, appselected, handleAppselected}) => {
    const appIDs=[];
    //const [appselected, setAppselected] = useState();
    
    {apps.map(app =>(
        appIDs.push(app.appID)
    ))}

    const uniqueappIDs= Array.from(new Set(appIDs));
    console.log(uniqueappIDs);
    /*
    const handleAppselected = (e) =>{
        setAppselected(e.target.value);
        console.log(appselected);
      }
      */
    //console.log(appIDs);
    return (
        <form>
            <select defaultValue={appselected} onChange={handleAppselected}>
                <option value='NONE'>-</option>
                {uniqueappIDs.map(app =>(
                    <option key={app} value={app}>{app}</option>
                ))}
            </select>
        </form>
    )
}

export default Appselect;