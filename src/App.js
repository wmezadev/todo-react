import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';

const App = () => {

  const [state] = useState({
    tasks: ['task 1', 'task 2', 'task 3']
  });

  return (
    <div className='wrapper'>
        <div className='card frame'>
          <Header tasks={state.tasks}/>
        </div>
    </div>
  );
}
 
export default App;
