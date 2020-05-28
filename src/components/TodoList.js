import React from 'react';
import Todo from './Todo';

const TodoList = ({tasks}) => {

    return (
        <div>
            <div className="list-wrapper">
                {
                    tasks.map((task, id) => (
                        <Todo key={id} task={task}/>
                    ))
                }
            </div>
        </div>
    );
}
 
export default TodoList;