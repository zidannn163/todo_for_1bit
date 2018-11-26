
import React, { Component } from 'react';
import PropTypes from 'prop-types';


const propTypes = {
    user: PropTypes.object.isRequired,
    get: PropTypes.func.isRequired,
    setActiveUser: PropTypes.func.isRequired,
};




class UserListItem extends Component {

    constructor(props) {
        super(props);
        
        this.state = {

        }
        this.updateTodoList = this.updateTodoList.bind(this);
    }
    
    updateTodoList(event) {

        console.log(this.props.user.id_user, "USERLIST")
        this.props.get(`admin/usertodo/${this.props.user.id_user}`, this.props.updateStateTodo)
        this.props.setActiveUser(this.props.user.id_user)
    }


    render() {
        return (
            <div className="user" onClick={this.updateTodoList}>
                {this.props.user.name}
            </div>
        );
    }
}


UserListItem.propTypes = propTypes;


export default UserListItem;


