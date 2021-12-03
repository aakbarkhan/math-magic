import React, { useState } from 'react';
import calculate from '../logic/calculate';
// import PropTypes from 'prop-types';
import './calc.css';
import Btn from './Button';

const Calculator = () => {
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState(null);
  const [operation, setOp] = useState(null);

  const handleClick = (buttonName) => {
    // const name = buttonName.target.innerText;
    const results = calculate({ total, next, operation }, buttonName);
    // console.log(results);
    setTotal(results.total);
    setNext(results.next);
    setOp(results.operation);
  };

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
        <Btn value="AC" className="btn" onEvent={handleClick} />
        <Btn value="+/-" className="btn" onEvent={handleClick} />
        <Btn value="%" className="btn" onEvent={handleClick} />
        <Btn value="÷" className="btn light" onEvent={handleClick} />
      </div>
      <div className="btn-wrapper">
        <Btn value="7" className="btn" onEvent={handleClick} />
        <Btn value="8" className="btn" onEvent={handleClick} />
        <Btn value="9" className="btn" onEvent={handleClick} />
        <Btn value="x" className="btn light" onEvent={handleClick} />
      </div>
      <div className="btn-wrapper">
        <Btn value="4" className="btn" onEvent={handleClick} />
        <Btn value="5" className="btn" onEvent={handleClick} />
        <Btn value="6" className="btn" onEvent={handleClick} />
        <Btn value="-" className="btn light" onEvent={handleClick} />
      </div>
      <div className="btn-wrapper">
        <Btn value="1" className="btn" onEvent={handleClick} />
        <Btn value="2" className="btn" onEvent={handleClick} />
        <Btn value="3" className="btn" onEvent={handleClick} />
        <Btn value="+" className="btn light" onEvent={handleClick} />
      </div>
      <div className="btn-wrapper">
        <Btn value="0" className="btn last" onEvent={handleClick} />
        <Btn value="." className="btn dot" onEvent={handleClick} />
        <Btn value="=" className="btn light-end" onEvent={handleClick} />
      </div>
    </div>
  );
};

export default Calculator;
