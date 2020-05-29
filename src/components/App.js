import React from 'react';
import '../style/App.scss';
import AddTask from './AddTask';
import TaskList from './TaskList';
import Filters from './Filters';
import EditContextProvider from '../contexts/EditContext';
import CreateTaskContextProvider from '../contexts/CreateTaskContext';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <CreateTaskContextProvider>
          <EditContextProvider>
            <Filters />
            <AddTask />
            <TaskList />
          </EditContextProvider>
        </CreateTaskContextProvider>
      </main>
    </div>
  );
}

export default App;
