import React, {Component} from 'react';
import ReactDOM from 'react-dom';


import Search from './header/Search';
import Quotes from './quote/Quotes';
import QuotesChuck from './quote/QuotesChuck';

import './App.scss';

class App extends Component {
  render() {
    return <div className="container">
      <Search />
      <QuotesChuck />
      <Quotes />
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