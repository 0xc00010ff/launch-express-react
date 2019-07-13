import React, { Component } from 'react';
import './index.css';

class Example extends Component {
  constructor(props) {
    super(props);
    // set state
    this.state = {
      greeting: 'loading...'
    };
  }

  componentDidMount() {
    // call the server after a short delay
    setTimeout(() => {
      // hit the example API
      fetch('/api/example')
        .then(response => response.json())
        .then((response) => {
          console.log(response);
          const { greeting } = response;
          this.setState({ greeting });
        });
    }, 1000);
  }

  render() {
    const { greeting } = this.state;
    return (
      <div className="App">
        <div className="Card">
          <h1 className="CardTitle">Check it out</h1>
          <p className="CardText Greeting">
            {greeting}
          </p>
        </div>
      </div>
    );
  }
}

export default Example;
