import React from 'react';
import { todoRemoved } from './todosSlice';
import { useDispatch } from 'react-redux';

function Todo({ text }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(todoRemoved(text.id));
  };
  return (
    <li>
      <span>{text.action}</span>
      <button onClick={handleClick}>DELETE</button>
    </li>
  );
}

export default Todo;
