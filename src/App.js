import React, {useEffect, useState} from 'react';
import './App.css';
import SearchBar from "./components/SearchBar";

function App() {
    const [coreData, setCoreData] = useState([]);

    useEffect(() => {
        //bypassing CORS restriction with a proxy
        fetch ('https://cors-anywhere.herokuapp.com/https://fetch-hiring.s3.amazonaws.com/hiring.json')
            .then(response => response.json())
            .then((data) => {
                data.length = 20;
                setCoreData(data);
            });
    });
    return (
        <div className="App">
            <SearchBar/>
            {
                coreData.map((row) => <p>{row.listId}</p>)
            }
        </div>
    );
}

export default App;

