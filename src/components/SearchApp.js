import React from 'react'

const SearchApp = ({searchResult}) => {
    return (
        <div classname="search-box">
            <form>
                <input type="search" className="srh" placeholder="Search Here..." onChange={searchResult}/>
            </form>
        </div>
    )
}

export default SearchApp;