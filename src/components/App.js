import React from 'react';
import '../style/App.scss';
import AddTask from './AddTask';
import TaskList from './TaskList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <AddTask />
        <TaskList />
      </main>
    </div>
  );
}

export default App;
