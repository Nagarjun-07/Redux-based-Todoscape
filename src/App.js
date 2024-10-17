import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';

function App() {
    return (
        <div className="todo-container">
            <h2>Todo-Scape</h2> {/* Updated Heading */}
            <TodoInput />
            <TodoList />
            <div className="built-by">
                Redux Todo by  <h4>Nagarjun ❤️</h4> 
            </div>
        </div>
    );
}

export default App;
