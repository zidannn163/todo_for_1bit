import React from 'react';
import PropTypes from 'prop-types';


import TodoList from '../Lists/TodoList';

const propTypes = {
    post: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired,
    createForm: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    userStatus: PropTypes.string.isRequired,
};


const UserInterface = (props) => {
    return (
            
            <div className="list-panel user">
                        
                <TodoList add={false}
                          id={props.id}
                          createForm={props.createForm}
                          userStatus={props.userStatus}
                          todos={props.todos}/>  
            </div>

        
    );
};


UserInterface.propTypes = propTypes;


export default UserInterface;
