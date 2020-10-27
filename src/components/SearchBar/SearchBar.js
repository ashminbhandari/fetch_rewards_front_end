import React, {useState} from 'react';

function SearchBar() {
    return (
        <div>
            <input className="text-input larger-font full-width" type={"text"} placeholder={"Type something to search"}/>
        </div>
    );
}

export default SearchBar;

