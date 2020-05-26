import React from 'react';
import '../style/App.scss';
import AddTask from './AddTask';
import TaskList from './TaskList';
import Filters from './Filters';
import EditContextProvider from '../contexts/EditContext';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <EditContextProvider>
          <Filters />
          <AddTask />
          <TaskList />
        </EditContextProvider>
      </main>
    </div>
  );
}

export default App;
