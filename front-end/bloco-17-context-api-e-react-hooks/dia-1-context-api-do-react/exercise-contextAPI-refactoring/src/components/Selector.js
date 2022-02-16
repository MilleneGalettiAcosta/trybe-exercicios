import React from 'react';
import MyContext from '../context/myContext';

const renderOptions = (options) => (
  options.map((option) => (
    <option
      value={option}
      key={option}
    >
      {option}
    </option>
  ))
);

const Selector = ({ value, onChange, options }) => (
  <span>
    <h1>{`Selected: ${value}`}</h1>
    <select
      onChange={(e) => onChange(e.target.value)}
      value={value}
    >
      {renderOptions(options)}
    </select>
  </span>
);

Selector.contextTypes = MyContext;

export default Selector;