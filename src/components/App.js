import React from 'react';
import '../style/App.scss';
import AddTask from './AddTask';
import TaskList from './TaskList';
import Filters from './Filters';
import EditContextProvider from '../contexts/EditContext';
import CreateTaskContextProvider from '../contexts/CreateTaskContext';
import Footer from "./Footer";
function App() {
  return (
    <div className="App">
      <header className="header">
      </header>
      <CreateTaskContextProvider>
        <EditContextProvider>
          <main>
            <Filters />
            <AddTask />
            <TaskList />
          </main>
          <Footer />
        </EditContextProvider>
      </CreateTaskContextProvider>
    </div>
  );
}

export default App;
