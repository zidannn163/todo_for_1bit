import React, { Component } from 'react';
import PropTypes from 'prop-types';


const propTypes = {

    post: PropTypes.func.isRequired,
    action: PropTypes.object.isRequired,
    updateStateTodo: PropTypes.func.isRequired,
    removeForm: PropTypes.func.isRequired,
};


class Completed extends Component {
    constructor(props) {
        super(props);
        
        this.state = {

        }
        this.funcRec = this.funcRec.bind(this);
        this.close = this.close.bind(this);
    }

    // this.props.action = {completed: 1, id: idtodo}
    funcRec(event){
        event.preventDefault();

        
        let bodyPost = `id=${this.props.action.todo_id}&completed=1`;



        this.props.post('completed', bodyPost, this.props.updateStateTodo)
       

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
                        <h2>Вы уверены, что хотите изменить статус задачи?</h2>
                        <button onClick={this.funcRec}>Изменить</button>
                        <button className="remove_button" onClick={this.close}>Отменить</button>
                    </form>
                    </div>
                </div>
            </div>

        );
    }
}


Completed.propTypes = propTypes;


export default Completed;