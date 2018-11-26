import React, { Component } from 'react';
import PropTypes from 'prop-types';


import UserListItem from './UserListItem';

const propTypes = {
    userArr: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    updateStateTodo: PropTypes.func.isRequired,
    get: PropTypes.func.isRequired,
    createForm: PropTypes.func.isRequired,
    setActiveUser: PropTypes.func.isRequired,
    id_admin: PropTypes.number.isRequired,
};


class UserList extends Component {

    constructor(props) {
        super(props);
        
        this.state = {

        }
        this.updateTodoList = this.updateTodoList.bind(this);
        this.newUser = this.newUser.bind(this);
    }
    


    newUser(event) { // Шаблон для вызова формы создания нового пользователя
        event.preventDefault();

        const action = {};
        const formType = 'addUser'

        this.props.createForm(formType, action)
    }
    updateTodoList(event) {

        this.props.get(`admin/usertodo/${this.props.id_admin}`, this.props.updateStateTodo)
        this.props.setActiveUser(this.props.id_admin)
    }

    render() {
        return (
            <div className="user-list">
           
            
                <div className="self" onClick={this.updateTodoList}>{this.props.name}</div>

                {this.props.userArr.map(user => <UserListItem user={user} 
                                                              get={this.props.get} 
                                                              updateStateTodo={this.props.updateStateTodo}
                                                              setActiveUser={this.props.setActiveUser}
                                                              />
                )}
                
                <div className="new-user" onClick={this.newUser}>
                    <span><i className="fa fa-plus-square-o" aria-hidden="true" /> Добавить</span>  
                </div>
            </div>
        );
    }
}


UserList.propTypes = propTypes;


export default UserList;
