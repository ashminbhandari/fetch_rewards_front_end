import React, {useEffect, useState} from 'react';

import SearchBar from "./components/SearchBar/SearchBar";
import TableSheet from "./components/TableSheet/TableSheet";

import './App.css';

import CoreDataContext from './contexts/CoreDataContext';

function App() {
    const [coreData, setCoreData] = useState([]);

    useEffect(() => {
        //bypassing CORS restriction with a proxy
        fetch('https://cors-anywhere.herokuapp.com/https://fetch-hiring.s3.amazonaws.com/hiring.json')
            .then(response => response.json())
            .then((data) => {
                data.length = 20;
                setCoreData(data);
            });
    }, []);

    const sortCoreData = (compareFunction) => {
        setCoreData([...coreData].sort(compareFunction));
    }

    const {Provider} = CoreDataContext;

    return (
        <Provider value={{coreData, sortCoreData}}>
            <div className="App">
                <SearchBar/>
                <TableSheet/>
            </div>
        </Provider>
    );
}

export default App;

