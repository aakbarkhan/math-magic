import React from 'react';
// import PropTypes from 'prop-types';
import './calc.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="wrapper">
        <input className="input-field" placeholder="0" type="text" />
        <div className="btn-wrapper">
          <button className="btn" type="button">AC</button>
          <button className="btn" type="button">+/-</button>
          <button className="btn" type="button">%</button>
          <button className="btn light" type="button">&divide;</button>
        </div>
        <div className="btn-wrapper">
          <button className="btn" type="button">7</button>
          <button className="btn" type="button">8</button>
          <button className="btn" type="button">9</button>
          <button className="btn light" type="button">&times;</button>
        </div>
        <div className="btn-wrapper">
          <button className="btn" type="button">4</button>
          <button className="btn" type="button">5</button>
          <button className="btn" type="button">6</button>
          <button className="btn light" type="button">-</button>

        </div>
        <div className="btn-wrapper">
          <button className="btn" type="button">1</button>
          <button className="btn" type="button">2</button>
          <button className="btn" type="button">3</button>
          <button className="btn light" type="button">+</button>
        </div>
        <div className="btn-wrapper">
          <button className="btn" type="button">0</button>
          <button className="btn light-end" type="button">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
