import React from 'react';
import TodoList from './components/TodoList';
import UserList from './components/UserList';

function App() {
  return (
    <>
      <UserList />
      <hr />

      <TodoList />
      <hr />

      <span>The data for the application was parsed from the website </span>
      <a href='https://jsonplaceholder.typicode.com/'>JSONPlaceholder</a>
    </>
  );
}

export default App;