import React, { createContext } from 'react';

const CoreDataContext = createContext({
    data: null,
    sortCoreData: () => {}
});

export default CoreDataContext;

