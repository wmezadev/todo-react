import React from 'react';

const Todo = ({ task, setState }) => {

    const handleDetele = () => {
        alert(`eliminar ${task}`)
    }

    return (
        <div className="list-item">
            {task}
            <button className="delete is-pulled-right" onClick={handleDetele}></button>
        </div>
    );
}
 
export default Todo;