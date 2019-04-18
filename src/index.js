import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(counter);

// Component
const Counter = ({ value, onIncrement, onDecrement }) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);

// Render() function to being passed to Redux's subscribe() method
const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => {
        store.dispatch({
          type: 'INCREMENT'
        });
      }}
      onDecrement={() => {
        store.dispatch({
          type: 'DECREMENT'
        });
      }}
    />,
    document.getElementById('root')
  );
};

render();

store.subscribe(render);