import React, { useState, useEffect } from 'react';
import Cards from './components/Cards';
import SearchBox from './components/SearchBox';
import axios from 'axios';

function App() {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => setRobots(res.data));
  }, []);

  const filteredRobots = robots.filter((robots) => {
    return robots.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return !robots.length ? (
    <h1 className='tc'>Loading</h1>
  ) : (
    <div className='tc'>
      <h1 className='f1 light-blue'>RoboFriends</h1>
      <SearchBox searchChange={(e) => setSearchField(e.target.value)} />
      <Cards robofriends={filteredRobots} />
    </div>
  );
}

export default App;
