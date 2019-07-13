import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/rocket.png';
import './index.css';

class Landing extends Component {
  render() {
    return (
      <div className="App">
        <div className="Card">
          <img src={logo} className="Rocket" alt="Rocket Lauching" />
          <h1 className="CardTitle">We have liftoff</h1>
          <p className="CardText">
            Check out the
            {' '}
            <Link className="ApiLink" to="/example">API Test Page</Link>
          </p>
        </div>

      </div>
    );
  }
}

export default Landing;
