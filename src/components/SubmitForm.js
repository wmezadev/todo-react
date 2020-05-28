import React, {useState} from 'react';

const SubmitForm = () => {

    const [state, setState] = useState({
        term: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(state.term);
    }

    return (
      <form onSubmit={handleSubmit}>
        <input 
          type='text'
          className='input'
          placeholder='Ingresar tarea'
          value={state.term}
          onChange={(e) => setState({term: e.target.value})}
        />
        <button className='button'>Submit</button>
      </form>
    );
}
 
export default SubmitForm;