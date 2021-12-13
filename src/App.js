import React from 'react';
import {
  BrowserRouter, Routes, Route, Link,
} from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';

const App = () => (
  <BrowserRouter>
    <div className="wrapper-er">
      <nav className="nav">
        <h1 className="heading">Math Magicians</h1>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/calculator">Calculator</Link>
          <Link to="/quotes">Quote</Link>

        </ul>
      </nav>
    </div>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quotes" element={<Quote />} />

    </Routes>
  </BrowserRouter>
);

export default App;
