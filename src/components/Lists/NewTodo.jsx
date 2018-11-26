import React, { Component } from 'react';
import PropTypes from 'prop-types';


const propTypes = {
    createForm: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    id_active: PropTypes.number.isRequired,
};


class NewTodo extends Component {

    constructor(props) {
        super(props);
        
        this.state = {

        }
        this.newTodo = this.newTodo.bind(this);
    }

    newTodo(event) { // Шаблон для вызова формы создания нового пользователя
        event.preventDefault();

        const action = {id: this.props.id_active}; // пересмотреть
        const formType = 'add'

        this.props.createForm(formType, action)
    }

    render() {
        return (
            <div className="new-todo-list" onClick={this.newTodo}>
                <div className="add-todo">
                    <span><i className="fa fa-plus-square-o" aria-hidden="true" /> &nbsp;&nbsp;Добавить задачу</span>
                </div>
            </div>
        );
    }
}


NewTodo.propTypes = propTypes;


export default NewTodo;
