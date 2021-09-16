import React, { useEffect } from 'react';
import Cards from './components/Cards';
import SearchBox from './components/SearchBox';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from './redux/index';

function App() {
  const robots = useSelector((state) => state.requestRobots.robots);
  const isPending = useSelector((state) => state.requestRobots.isPending);
  const searchField = useSelector((state) => state.searchRobots.searchField);
  const dispatch = useDispatch();
  const { requestRobots, setSearchField } = bindActionCreators(
    actions,
    dispatch
  );

  useEffect(() => {
    requestRobots();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredRobots = robots.filter((robots) => {
    return robots.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return isPending ? (
    <h1 className="tc">Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1 light-blue">RoboFriends</h1>
      <SearchBox searchChange={(e) => setSearchField(e.target.value)} />
      <Cards robofriends={filteredRobots} />
    </div>
  );
}

export default App;
