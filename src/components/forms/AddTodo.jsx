import React, { Component } from 'react';
import PropTypes from 'prop-types';


const propTypes = {
    action: PropTypes.number.isRequired,
    post: PropTypes.func.isRequired,
    done: PropTypes.func.isRequired,
    removeForm: PropTypes.func.isRequired,
};


class AddTodo extends Component {
    constructor(props) {
        super(props);
        
        this.state = {

        }
        this.add = this.add.bind(this);
        this.close = this.close.bind(this);
    }

    
    add(event) {
        event.preventDefault();
        const path = 'new-todo';

        let bodyPost = `id_user=${this.props.action.id}&todo=${this.refs.todo.value}&date=${this.refs.deadline.value}&datetime=${this.refs.deadlinetime.value}`;
        
        this.props.post(path, bodyPost, this.props.done)

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
                    <input type="text" placeholder="Задача" ref="todo" />
                    <input type="date" placeholder="До какого числа" ref="deadline" />
                    <input type="time" placeholder="До какого времени" ref="deadlinetime" />
                    <button>Создать задачу</button>
                    <button className="remove_button" onClick={this.close}>Отменить</button>
                    </form>
                </div>
            </div>


        );
    }
}


AddTodo.propTypes = propTypes;


export default AddTodo;