
import React from 'react';

const TodoListHeader = () => {
    return (
        <div className="todos-list-item">      
            <div className="number">№</div>
            <div className="todo">Задача</div>
            <div className="date">Дата постан<br/>задачи</div>
            <div className="deadline">Дедлайн<br/>задачи</div>
            <div className="date-complite">Дата вып.<br/>задачи</div>
            <div className="date-check">Дата пров<br/>задачи</div>  
            <div className="todo-status">Статус <br/>вып.</div>
            <div className="check-status">Статус <br/>проверки</div>
        </div>
    );
}

export default TodoListHeader;


