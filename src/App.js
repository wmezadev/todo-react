import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header';
import TodoList from './components/TodoList';
import SubmitForm from './components/SubmitForm';

const App = () => {

  const [state, setState] = useState({
    tasks: []
  });

  useEffect (() => {
    const fetchData = async () => {
      const result = await axios('https://jsonplaceholder.typicode.com/todos/');
      setState({
        tasks: result.data
      })
      console.log(result.data)
    }
    fetchData();
  },[])

  return (
    <div className='wrapper'>
        <div className='card frame'>
          <Header tasks={state.tasks}/>
          <TodoList tasks={state.tasks} setState={setState}/>
          <SubmitForm tasks={state.tasks} setTask={setState} />
        </div>
    </div>
  );
}
 
export default App;
