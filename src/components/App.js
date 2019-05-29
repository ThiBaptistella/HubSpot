import React, {Component} from 'react';
import ReactDOM from 'react-dom';


import Search from './header/Search';
import List from './results/List';

import './App.scss';

class App extends Component {
  render() {
    return <div className="container">
      <Search />
      <List />
    </div>
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}