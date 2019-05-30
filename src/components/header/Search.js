import React, {Component} from 'react';
import SelectSearch from 'react-select-search'
import '../App.scss';
import Data from '../../data/data.json'




class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            search: "",
            value: ""
        };
        this.getValue = this.getValue.bind(this);
        this.clearField = this.clearField.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
    }
    getValue(e) {
        this.setState({
            value: e.target.value
        });
        console.log(value);
    }

    clearField(e) {
        e.preventDefault();
        this.setState({
            value: ""
        });
        console.log(value);
    }

    updateSearch(e) {
        this.setState({
            search: e.target.value
        });
    }
  render() {
      let filterdMovie = Data.filter(
          (movieList) => {
              return movieList.title.toLowerCase().indexOf(this.state.search) !== -1;
          }
      );
    return (
        <div>
            <div className="search-container">
                <div>
                    <div class="select-style">
                        <select onChange={this.getValue} value={this.state.value}> 
                            <option value="Genre">Genre</option>
                            <option value="Action">Action</option>
                            <option value="Adventure">Adventure</option>
                            <option value="Animmation">Animmation</option>
                            <option value="Comedy">Comedy</option>
                        </select>
                    </div>
                        
                
                </div>
                <div className="input-search">
                    <input 
                        className=""
                        type="text" 
                        placeholder="Search"
                        value={this.state.search}
                        onChange={this.updateSearch.bind(this)} 
                    />
                    <div className="clear-search">
                        <a className="clear" onClick={this.clearField}>Clear Filed</a>
                        <div>{this.state.value}</div>
                    </div> 
                </div> 
            </div>
            <div className="row">
                {filterdMovie.map((movieList, index) => {
                    return <div className="list" key={index}>
                        <img src={movieList.poster} />
                        <h1>{movieList.title} ({movieList.year})</h1>
                        <label>{movieList.genre}</label>
                    </div>
                })}
            </div>
        </div>
    )
  }
}

export default Search;