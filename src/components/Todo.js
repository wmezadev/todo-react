import React from 'react';

const Todo = ({ task, tasks, setState }) => {

    const handleDetele = () => {
        setState(
            {
                tasks: tasks.filter(item => item !== task)
            }
        )
    }

    return (
        <div className="list-item">
            {task.title}
            <button className="delete is-pulled-right" onClick={handleDetele}></button>
        </div>
    );
}
 
export default Todo;