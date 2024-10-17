import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, toggleComplete } from '../redux/todoSlice';

const TodoList = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  return (
    <div>
      {todos.length ? (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
              <button onClick={() => dispatch(toggleComplete(todo.id))}>
                {todo.completed ? 'Undo' : 'Complete'}
              </button>
              <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks yet. Add one!</p>
      )}
    </div>
  );
};

export default TodoList;
