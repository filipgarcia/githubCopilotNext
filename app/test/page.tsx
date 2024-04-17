'use client';
import React, { useState, useEffect, use, useReducer, useRef } from 'react';
import { Header } from './component/Header';
import { Circle } from './component/Cricle';

/**
 * A component that displays a counter and allows incrementing the count.
 */
const CounterComponent = () => {
  const [count, setCount] = useState(0);
  const [isButtonClicked, setIsButtonClicked] = useState('banana');

  /*   useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => {
      clearInterval(interval);
    };
  }, []); */

  const inputRef = useRef<HTMLInputElement>(null);

  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <div>
      <Header />
      <Circle />
      <div>Counter: {count}</div>
      <button
        className="m-4 border-4 p-4"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        Increment
      </button>
      <button
        id="2"
        className="m-4 border-4 p-4"
        onClick={() => setIsButtonClicked('apple')}
      >
        Button
      </button>
      <button id="1" onClick={() => setIsButtonClicked('banana')}>
        Button
      </button>
      <button onClick={focusInput}>Focus input</button>
      <div>{isButtonClicked}</div>
      <input ref={inputRef} type="text" />
    </div>
  );
};

export default CounterComponent;
