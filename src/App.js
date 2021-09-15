import React from 'react';
import Cards from './components/Cards';
import SearchBox from './components/SearchBox';
import axios from 'axios';
import { setSearchField } from './actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchField
  };
};

const mapDispatchToProps = (dispatch) => {
  return { onSearchChange: (e) => dispatch(setSearchField(e.target.value)) };
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: []
    };
  }

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(({ data }) => this.setState({ robots: data }));
  }

  render() {
    const { robots } = this.state;
    const { searchField, onSearchChange } = this.props;

    const filteredRobots = this.state.robots.filter((robots) => {
      return robots.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return !robots.length ? (
      <h1 className="tc">Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1 light-blue">RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Cards robofriends={filteredRobots} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
