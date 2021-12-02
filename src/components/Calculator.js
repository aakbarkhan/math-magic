import React from 'react';
import calculate from '../logic/calculate';
// import PropTypes from 'prop-types';
import './calc.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const handleClick = (buttonName) => {
      const name = buttonName.target.innerText;
      const { total, next, operation } = calculate(this.state, name);
      this.setState({ total, next, operation });
    };
    const { total, next, operation } = this.state;
    const display = () => {
      if (next) {
        return next;
      }
      if (operation) {
        return operation;
      }
      if (total) {
        return total;
      }
      return 0;
    };
    return (
      <div className="wrapper">
        <input className="input-field" placeholder="0" type="text" maxLength="0" value={display()} onChange={() => ''} />
        <div className="btn-wrapper">
          <button className="btn" type="button" onClick={handleClick}>AC</button>
          <button className="btn" type="button" onClick={handleClick}>+/-</button>
          <button className="btn" type="button" onClick={handleClick}>%</button>
          <button className="btn light" type="button" onClick={handleClick}>÷</button>
        </div>
        <div className="btn-wrapper">
          <button className="btn" type="button" onClick={handleClick}>7</button>
          <button className="btn" type="button" onClick={handleClick}>8</button>
          <button className="btn" type="button" onClick={handleClick}>9</button>
          <button className="btn light" type="button" onClick={handleClick}>x</button>
        </div>
        <div className="btn-wrapper">
          <button className="btn" type="button" onClick={handleClick}>4</button>
          <button className="btn" type="button" onClick={handleClick}>5</button>
          <button className="btn" type="button" onClick={handleClick}>6</button>
          <button className="btn light" type="button" onClick={handleClick}>-</button>

        </div>
        <div className="btn-wrapper">
          <button className="btn" type="button" onClick={handleClick}>1</button>
          <button className="btn" type="button" onClick={handleClick}>2</button>
          <button className="btn" type="button" onClick={handleClick}>3</button>
          <button className="btn light" type="button" onClick={handleClick}>+</button>
        </div>
        <div className="btn-wrapper">
          <button className="btn last" type="button" onClick={handleClick}>0</button>
          <button className="btn dot" type="button" onClick={handleClick}>.</button>
          <button className="btn light-end" type="button" onClick={handleClick}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
