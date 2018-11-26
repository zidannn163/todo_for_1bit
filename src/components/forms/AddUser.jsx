import React, { Component } from 'react';
import PropTypes from 'prop-types';


const propTypes = {
    action: PropTypes.number.isRequired,
    post: PropTypes.func.isRequired,
    done: PropTypes.func.isRequired,
    removeForm: PropTypes.func.isRequired,
};


class AddUser extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            err: ''
        }
        this.add = this.add.bind(this);
        this.close = this.close.bind(this);
    }

    
    add(event) {
        event.preventDefault();
        const path = 'new-user';
        if (this.refs.status.value === 'admin' || this.refs.status.value === "user" ) {

            let bodyPost = `login=${this.refs.login.value}&password=${this.refs.password.value}&status=${this.refs.status.value}&name=${this.refs.name.value}&position=${this.refs.position.value}`;
            
            this.props.post(path, bodyPost, this.props.done)
            this.props.removeForm()
        } else {
            this.setState({
                err: 'Верно укажите статус пользователя, "user" или "admin"' 
            })
        }

    }
    close(event) {
        event.preventDefault();
        this.props.removeForm()
    }
    
    render() {
        return (
           <div className="login-page fixed">
                <div className="form">
                    <form className="login-form" onSubmit={this.add}>
                        <input type="text" placeholder="Логин" ref="login" />
                        <input type="text" placeholder="Пароль" ref="password" />
                        <input type="text" placeholder='"admin" или "user"' ref="status" />
                        <input type="text" placeholder="Имя" ref="name" />
                        <input type="text" placeholder="Должность" ref="position" />
                        <button>Создать пользователя</button>
                        <button className="remove_button" onClick={this.close}>Отменить</button>
                    </form>
                    <div>{this.state.err}</div>
                </div>
            </div>


        );
    }
}


AddUser.propTypes = propTypes;


export default AddUser;