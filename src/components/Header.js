import React from 'react';

const Header = ({ tasks }) => {
    return (
        <div className="card-header">
            <h1 className="card-header-title header">
                Tienes { tasks.length } tareas
            </h1>
        </div>
    );
}
 
export default Header;