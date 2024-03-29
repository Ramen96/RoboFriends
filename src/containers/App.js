import React, {useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import './App.css';

function App() {
 
    const onSearchChange = (event) => {
        setSearchfeild(event.target.value);
     }
    
    const [robots, setRobots] = useState([]);
    const [searchfeild, setSearchfeild] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
           .then(response => response.json())
           .then(users => { setRobots(users)});
    }, [])

    const filteredRobots =  robots.filter(robot => {
        const filteredNames = robot.name.toLocaleLowerCase().includes(searchfeild.toLocaleLowerCase());
        const filteredEmails = robot.email.toLocaleLowerCase().includes(searchfeild.toLocaleLowerCase());
        const finalFilter = filteredEmails + filteredNames;
        return finalFilter;
    });
    
    return !robots.length ?
    <h1 className="tc">Loading</h1> :
    (
        <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <SearchBox searchChange={onSearchChange} />
            <Scroll>
                <ErrorBoundry>
                    <CardList robots={filteredRobots} />
                </ErrorBoundry>
            </Scroll>
        </div>
    );
}

export default App;
