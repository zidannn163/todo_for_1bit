import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TodoListItem from './TodoListItem';
import TodoListHeader from './TodoListHeader';
import NewTodo from './NewTodo';

const propTypes = {
    add: PropTypes.bool.isRequired,
    todos: PropTypes.array.isRequired,
    createForm: PropTypes.func.isRequired,
    userStatus: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    id_active: PropTypes.number.isRequired,
};


function TodoList(props) {
        let number = 1;
        return (
            <div className="todos-list">
                <TodoListHeader/>
                {props.todos.map(todo => <TodoListItem todo={todo}
                                                       number={number++}
                                                       createForm={props.createForm}
                                                       userStatus={props.userStatus}/>)}
                

                {props.add ?
                     <NewTodo createForm={props.createForm} id={props.id} id_active={props.id_active}/>
                    :
                    <div></div>
                }
                
            </div>
        )
   
}


TodoList.propTypes = propTypes;


export default TodoList;
