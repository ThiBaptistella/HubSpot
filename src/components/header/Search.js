import React, {Component} from 'react';
import '../App.scss';
class Search extends Component {
  render() {
    return (
        <div className="search-container">
            <div className="topnav">
                    <div className="dropdown">
                        <button className="dropbtn">Genre
                        </button>
                        <div className="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div> 
                    <div className="dropdown">
                        <button className="dropbtn">Year 
                        <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div> 
                    <div className="input-search">
                        <input type="text" placeholder="Search"></input>
                    </div> 
                    
            </div>
        </div>
    )
  }
}

export default Search;