import React from 'react'

const Appselect = ({ apps }) => {
    return (
        <select>
            {apps.map(app =>(
                <option key={app.id} value={app.appID}>{app.appID}</option>
            ))}
        </select>
    )
}

export default Appselect;