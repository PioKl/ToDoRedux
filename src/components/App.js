import React from 'react';
import '../style/App.scss';
import AddTask from './AddTask';
import TaskList from './TaskList';
import Filters from './Filters';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <Filters />
        <AddTask />
        <TaskList />
      </main>
    </div>
  );
}

export default App;
