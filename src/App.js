import React, {useEffect, useState, useContext} from 'react';

import SearchBar from "./components/SearchBar/SearchBar";
import TableSheet from "./components/TableSheet/TableSheet";

import './App.css';

import CoreDataContext from './contexts/CoreDataContext';

function App() {
    const [coreData, setCoreData] = useState([]);
    const [displayData, setDisplayData] = useState([]);

    useEffect(() => {
        const fetchHiringData = () => {
            //bypassing CORS restriction with a proxy
            fetch('https://cors-anywhere.herokuapp.com/https://fetch-hiring.s3.amazonaws.com/hiring.json')
                .then(response => response.json())
                .then((data) => {
                    setCoreData(data);
                    setDisplayData(data);
                });
        }

        fetchHiringData();
    }, []);

    const sortDisplayData = (compareFunction) => {
        setDisplayData([...displayData].sort(compareFunction));
    }

    const filterDisplayData = (filterFunction) => {
        setDisplayData([...coreData].filter(filterFunction));
    }

    const {Provider} = CoreDataContext;

    return (
        <Provider value={{displayData, sortDisplayData, filterDisplayData}}>
            <div className="App">
                <SearchBar className={"text-input larger-font full-width"} placeHolder={"Search by name..."}/>
                <TableSheet/>
            </div>
        </Provider>
    );
}

export default App;

