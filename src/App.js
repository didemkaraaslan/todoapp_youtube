import React, { useState, useEffect, useRef } from 'react';
import TodoList from './components/TodoList';
import { useTodoLayerValue } from './context/TodoContext';
import './App.css';

const App = () => {
  const [{ todos }, dispatch] = useTodoLayerValue();
  const [content, setContent] = useState('');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (content) {
      const newTodo = {
        id: Math.floor(Math.random() * 39399393),
        content,
        isCompleted: false,
      };

      dispatch({
        type: 'ADD_TODO',
        payload: newTodo,
      });

      setContent('');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          value={content}
          className="todo-input"
          placeholder="Ne yapacaksın bakalım?"
          ref={inputRef}
          onChange={(event) => setContent(event.target.value)}
        />

        <button className="todo-button">Ekle</button>
      </form>
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
