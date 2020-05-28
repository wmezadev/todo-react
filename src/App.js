import React, { useState } from 'react';
import './App.css';

const App = () => {

  const [state] = useState({
    tasks: ['task 1', 'task 2', 'task 3']
  });

  return (
    <div className='wrapper'>
        <div className='card frame'>
          <ul>
          { 
            state.tasks.map(task => (
              <li>
                {task}
              </li>
            ))
          }
          </ul>
        </div>
    </div>
  );
}
 
export default App;
