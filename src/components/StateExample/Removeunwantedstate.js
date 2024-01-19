import { useState } from 'react';

export default function FeedbackForm2() {

  function handleClick() {
    const newval = prompt('What is your name?');
    alert(`Hello, ${newval}!`);
  }

  return (
    <button onClick={handleClick}>
      Greet
    </button>
  );
}