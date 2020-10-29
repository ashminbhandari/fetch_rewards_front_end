import React, {useContext} from 'react';
import CoreDataContext from "../../contexts/CoreDataContext";

const SortOps = ({className, sortFunction}) => {
    const {sortDisplayData} = useContext(CoreDataContext);

    return (
        <i onClick={() => sortDisplayData(sortFunction)} className={`${className} hand-pointer`}/>
    )
}

export default SortOps;