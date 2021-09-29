import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
  <h1>⏺Select Test⏺</h1>,
  document.querySelector("[class=\"generalText\"]")
);

ReactDOM.render(
    <div className="selectBlock">
      <select name="select">
        <option value="value1" selected>⭕️___ 1 ___⭕️</option>
        <option value="value2">⭕️___ 2 ___⭕️</option>
        <option value="value3">⭕️___ 3 ___⭕️</option>
        </select>
    </div>,
  document.querySelector("[class=\"block\"]")
);

ReactDOM.render(
  <div className="button">
    <form name="generalForm">
      <input type="button" name="Add_Element" value="Add Element" />
    </form>
  </div>,
document.querySelector("[class=\"button\"]")
);
