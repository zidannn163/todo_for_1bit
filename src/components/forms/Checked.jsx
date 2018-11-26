import React, { Component } from 'react';
import PropTypes from 'prop-types';


const propTypes = {
    post: PropTypes.func.isRequired,
    action: PropTypes.object.isRequired,
    updateStateTodo: PropTypes.func.isRequired,
};


class Cheked extends Component {
    constructor(props) {
        super(props);
        
        this.state = {

        }
        this.check = this.check.bind(this);
        this.close = this.close.bind(this);
    }

    check(event) {
        event.preventDefault();
        
        let bodyPost = `id=${this.props.action.todo_id}&check=1`;



        this.props.post('check', bodyPost, this.props.updateStateTodo)
    }
    close(event) {
        event.preventDefault();
        this.props.removeForm()
    }
    
    render() {
        return (
            <div className="message-land">
                <div className="login-page">
                    <div className="form-todo">
                    <form className="new-todo-form">
                        <h2>Вы уверены, что хотите отметить задачу как проверенную?</h2>
                        <button onClick={this.check}>Изменить</button>
                        <button className="remove_button" onClick={this.close}>Отменить</button>
                    
                    </form>
                    </div>
                </div>
            </div>

        );
    }
}


Cheked.propTypes = propTypes;


export default Cheked;
