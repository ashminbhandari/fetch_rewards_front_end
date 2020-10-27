import React, {useState} from 'react';

function SearchBar() {
    return (
        <div>
            <input className="text-input larger-font full-width" type={"text"} placeholder={"Type here to search..."}/>
            <i className={"fa fa-search left-margin-slight larger-font"}/>
        </div>
    );
}

export default SearchBar;

