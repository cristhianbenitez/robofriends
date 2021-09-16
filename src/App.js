import React, { useState, useEffect } from 'react';
import Cards from './components/Cards';
import SearchBox from './components/SearchBox';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from './state/index';

function App() {
  const robots = useSelector((state) => state.robots.robots);
  const searchField = useSelector((state) => state.searchField.searchField);
  const dispatch = useDispatch();
  const { setRobots, setSearchField } = bindActionCreators(actions, dispatch);

  useEffect(() => {
    setRobots();
  }, []);

  const filteredRobots = robots.filter((robots) => {
    return robots.name.toLowerCase().includes(searchField.toLowerCase());
  });
  return !robots.length ? (
    <h1 className="tc">Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1 light-blue">RoboFriends</h1>
      <SearchBox searchChange={(e) => setSearchField(e.target.value)} />
      <Cards robofriends={robots} />
    </div>
  );
}

export default App;
