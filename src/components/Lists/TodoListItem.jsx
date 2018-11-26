import React, { Component } from 'react';
import PropTypes from 'prop-types';


const propTypes = {
    todo: PropTypes.object.isRequired,
    userStatus: PropTypes.string.isRequired,
    createForm: PropTypes.func.isRequired,

};


class TodoListItem extends Component {

    constructor(props) {
        super(props);
        
        this.state = {

        }
        this.completeTodo = this.completeTodo.bind(this);
        this.checkTodo = this.checkTodo.bind(this);
    }
    
    completeTodo(event) {
        event.preventDefault();
        console.log("userStatus", this.props.userStatus)
        console.log("todo_status", this.props.todo.todo_status)

        if (this.props.userStatus === 'user' && this.props.todo.todo_status === 0) {

            const action = {todo_id: this.props.todo.id}; // пересмотреть
            const formType = 'completed'
    
            this.props.createForm(formType, action)

        }

    }

    checkTodo(event) {
        event.preventDefault();
        // console.log('his.props.todo.check_status', this.props.todo.check_status)
        console.log('this.props.userStatus', this.props.userStatus)
        if (this.props.userStatus === 'admin' && this.props.todo.check_status === 0) {

            const action = {todo_id: this.props.todo.id}; // пересмотреть
            const formType = 'check'
    
            this.props.createForm(formType, action)

        }

    }

    render() {
        return (
            <div className="todos-list-item">
                {console.log(this.props.todo_status, this.props.check_status )} 
                <div className="number">{this.props.number}</div>
                <div className="todo">{this.props.todo.todo}</div>
                
                <div className="date">
                    {this.props.todo.date ? this.props.todo.date.substring(0,10) : ''}<br/>
                    {this.props.todo.date ? this.props.todo.date.substr(11,5) : ''}
                </div>
                <div className="deadline">
                    {this.props.todo.date_deadline ? this.props.todo.date_deadline.substring(0,10) : ''}<br/>
                    {this.props.todo.date_deadline ? this.props.todo.date_deadline.substr(11,5) : ''}
                </div>
                <div className="date-complite">
                    {this.props.todo.date_complete ? this.props.todo.date_complete.substring(0,10) : ''}<br/>
                    {this.props.todo.date_complete ? this.props.todo.date_complete.substr(11,5) : ''}
                </div>

                <div className="date-check">
                    {this.props.todo.date_check ? this.props.todo.date_check.substring(0,10) : ''}<br/>
                    {this.props.todo.date_check ? this.props.todo.date_check.substr(11,5) : ''}
                </div>

                
                <div className="todo-status" onClick={this.completeTodo}>
                    {this.props.todo.todo_status === 1 ?
                        <i className="fa fa-check-square-o" aria-hidden="true"></i>
                        :
                        <i className="fa fa-square-o" aria-hidden="true"></i>
                    }
                </div>
                <div className="check-status" onClick={this.checkTodo}>
                    {this.props.todo.check_status === 1 ?
                        <i className="fa fa-check-square-o" aria-hidden="true"></i>
                        :
                        <i className="fa fa-square-o" aria-hidden="true"></i>
                    }
                </div>
            </div>
        );
    }
}


TodoListItem.propTypes = propTypes;


export default TodoListItem;
