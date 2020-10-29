import React, {useContext} from 'react';
import CoreDataContext from "../../contexts/CoreDataContext";

const SearchBar = ({className, placeHolder}) => {
    const {filterDisplayData} = useContext(CoreDataContext);

    const search = (keyword) => {
        filterDisplayData(row => row.name != null && row.name.includes(keyword));
    }

    return (
        <div>
            <input className={className}
                   type={"text"}
                   placeholder={placeHolder}
                   onChange={event => search(event.target.value)}
            />
        </div>
    );
}

export default SearchBar;

