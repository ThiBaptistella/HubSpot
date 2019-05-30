import React from 'react';
import axios from 'axios';
import '../App.scss';

class Chucknorris extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        fact: 'You guys from HubSopt just found someone better than me, you should definetily hire thiago baptistella.  by: Chuch norris'
      };
      
      this.getFact = this.getFact.bind(this);
    }
    
    getFact() {
      axios.get('https://api.chucknorris.io/jokes/random')
        .then(response => {
        this.setState({fact: response.data.value});
      }).catch(error => {
        console.log(error);
      });
    }
    
    render() {
      return(
        <blockquote>
            <div className="circle">
            </div>
            <div className="vertical-line"></div>
            <p>{'"' + this.state.fact + '"'}</p>
            <button type="button" 
                className="btn-chuck"
                onClick={this.getFact}>
                Tell me more
            </button>
        </blockquote>
      );
    }
  }

  export default Chucknorris;