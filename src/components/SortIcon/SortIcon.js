import React, {useContext} from 'react';
import CoreDataContext from '../../contexts/CoreDataContext'

const SortIcon = ({className, sortFunction}) => {
    const {sortCoreData} = useContext(CoreDataContext);

    return (
        <i onClick={() => sortCoreData(sortFunction)} className={`${className}`}/>
    )
}

export default SortIcon;