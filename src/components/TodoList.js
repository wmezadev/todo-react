import React from 'react';

const TodoList = ({tasks}) => {

    return (
        <div>
            <div className="list-wrapper">
                {
                    tasks.map(task => (
                        <p>
                            {task}
                        </p>
                    ))
                }
            </div>
        </div>
    );
}
 
export default TodoList;