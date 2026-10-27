import React from 'react';
import Filter from './components/Filter';
import TodoList from './components/TodoList';

export default function App() {
  return (
    <div className="container mt-5" style={{ maxWidth: '600px' }}>
      <div className="card shadow-sm p-4">
        <h1 className="text-center mb-4 text-primary">Ma TodoList Redux</h1>
        <div className="d-flex justify-content-center">
          <Filter />
        </div>
        <TodoList />
      </div>
    </div>
  );
}
