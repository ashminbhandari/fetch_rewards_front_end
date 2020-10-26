import React, {useState} from 'react';

function SearchBar() {
    return (
        <div>
            <input className="input-field" type={"text"} placeholder={"Type here to search..."}/>
            <i className={"fa fa-search"}/>
        </div>
    );
}

export default SearchBar;

