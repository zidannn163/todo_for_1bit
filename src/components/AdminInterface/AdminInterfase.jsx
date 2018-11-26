
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import UserList from '../Lists/UserList';
import TodoList from '../Lists/TodoList';
import AdminPanel from './AdminPanel';

const propTypes = {
    todos: PropTypes.array.isRequired,
    postReq: PropTypes.func.isRequired,
    id_admin: PropTypes.number.isRequired,
    name_admin: PropTypes.string.isRequired,
    userArr: PropTypes.array.isRequired,
    updateStateTodo: PropTypes.func.isRequired,
    createForm: PropTypes.func.isRequired,
    userStatus: PropTypes.string.isRequired,

    setActiveUser: PropTypes.func.isRequired,
    id_active: PropTypes.number.isRequired,
};





class AdminInterface extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            active_user_id: 0
        }
        
    }

    

    

    render() {
        return (
            <div>
                <AdminPanel name={this.props.name_admin}/>
                <div className="list-panel">

                    <UserList name={this.props.name_admin} 
                              userArr={this.props.userArr}
                              post={this.postReq}
                              get={this.props.get}
                              updateStateTodo={this.props.updateStateTodo}
                              createForm={this.props.createForm}
                              setActiveUser={this.props.setActiveUser}
                              id_admin={this.props.id_admin}/>  

                    

                    <TodoList add={true} 
                              todos={this.props.todos}
                              id_active={this.props.id_active}
                              id={this.props.id_admin}
                              createForm={this.props.createForm}
                              userStatus={this.props.userStatus}/>  
                </div>

            </div>
        );
    }
}









AdminInterface.propTypes = propTypes;


export default AdminInterface;
