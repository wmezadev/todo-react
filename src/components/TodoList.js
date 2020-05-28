import React from 'react';
import Todo from './Todo';

const TodoList = ({tasks, setState}) => {

    return (
        <div>
            <div className="list-wrapper">
                {
                    tasks.length &&
                    tasks.map((task) => (
                        <Todo key={task.id} task={task} tasks={tasks} setState={setState}/>
                    ))
                }
            </div>
        </div>
    );
}
 
export default TodoList;