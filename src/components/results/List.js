import React, {Component} from 'react';
import '../App.scss';

import Data from '../../data/data.json'

class List extends Component {
  render() {
    return (
        <div className="search-container">
            {Data.map((movieList, index) => {
                return <div>
                    <h1 key={index}>{movieList.title}</h1>
                    <img key={index} src={movieList.poster} />
                </div>
            })}
        </div>
    )
  }
}

export default List;