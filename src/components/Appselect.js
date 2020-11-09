import React from 'react';

const Appselect = ({ apps, appselected, timeorder, handleAppselected, handleTimeorder}) => {
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
            <div className="selectdiv">
            <select className="app-select" defaultValue={appselected} onChange={handleAppselected} placeholder={<div>Select An App</div>}>
                <option disabled={false} value="">-</option>
                {uniqueappIDs.map(app =>(
                    <option key={app} value={app}>{app}</option>
                ))}
            </select>
            </div>
            <div className="selectdiv2">
            <select className="time-select" defaultValue={timeorder} onChange={handleTimeorder} >
                <option value="newest">newest</option>
                <option value="oldest">oldest</option>
            </select>
            </div>
        </form>
    )
}

export default Appselect;