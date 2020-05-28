import React from 'react';

const Todo = ({ task }) => {
    return (
        <div className="list-item">
            {task}
            <button className="delete is-pulled-right"></button>
        </div>
    );
}
 
export default Todo;