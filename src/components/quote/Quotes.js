import React, {Component} from 'react';
import axios from 'axios';

import '../App.scss';

class Quotes extends Component {
    constructor(props){
        super(props)
        this.state = {
            coments: [],
        };
    }
      componentDidMount() {
        const url = `https://jsonplaceholder.typicode.com/comments`;
        axios.get(url)
        .then(response => 
            response.data
        )
        .then((data) => {
          this.setState({ coments: data })
          console.log(this.state.coments[0])
         })
      }
  render() {
    return (
        <div>
            <h1>Some data fetched from a radon API</h1>
            {this.state.coments.map((coment, i) => {
                return <blockquote>
                    <div class="circle">
                    </div>
                    <div class="vertical-line"></div> 
                    <p>{coment.body}</p>
                
                </blockquote>
                
            })}
        </div>

    )
  }
}

export default Quotes;