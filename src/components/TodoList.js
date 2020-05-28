import React from 'react';
import Todo from './Todo';

const TodoList = ({tasks, setState}) => {

    return (
        <div>
            <div className="list-wrapper">
                {
                    tasks.map((task, id) => (
                        <Todo key={id} task={task} setState={setState}/>
                    ))
                }
            </div>
        </div>
    );
}
 
export default TodoList;