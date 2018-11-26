import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "../node_modules/font-awesome/css/font-awesome.min.css";
import './App.css';

import AdminInterfase from './components/AdminInterface/AdminInterfase';
import UserInterfase from './components/UserInterface/UserInterfase';

import Checked from './components/forms/Checked';
import AddTodo from './components/forms/AddTodo';
import Completed from './components/forms/Completed';
import AddUser from './components/forms/AddUser';

import Autorization from './components/forms/Autorization';
import { stat } from 'fs';


       // {
//     id: 3,
//     id_user: 2,
//     todo: 'Спасти мир',
//     todo_status: 0,
//     check_status: 0,
//     date: 2018-11-23T13:46:30.000Z,
//     date_deadline: 2018-12-14T09:00:00.000Z,
//     date_check: null,
//     date_complete: null },                 



class App extends Component {

    constructor(props) {                          
        super(props);
        
        this.state = {
            status: "",
            id: 0,
            id_active: 0,
            name_self: '',
            todos: [],
            self: {},
            users: [],
            authErr: '',
            message: false,

            formType: '',
            action: {}

        };

        this.post = this.post.bind(this);
        this.get = this.get.bind(this);
        this.handleAutorization = this.handleAutorization.bind(this);
        this.handleUsers = this.handleUsers.bind(this);
        this.handleSelfName = this.handleSelfName.bind(this);
        this.updateStateTodo = this.updateStateTodo.bind(this);
        this.createForm = this.createForm.bind(this);
        this.removeForm = this.removeForm.bind(this);
        this.setActiveUser = this.setActiveUser.bind(this);
    }


  

    post(path , bodyStr, done) {
        console.log("POST path ", path)
        console.log("bodyStr", bodyStr)
        const post = {
            method: 'post',  
            headers: {  
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
            },  
            body: bodyStr
        }

        fetch(`http://localhost:3000/${path}`, post) // 3000 потому-что   "proxy": "http://localhost:5000",
            .then(res => res.json())
            .then(params => {
                console.log(params, 'params')
                done(params)
            })
            .catch(err => console.log(err.message))        
    }

    get(path, done) {
        console.log(path, 'Path GET')
        fetch(`http://localhost:3000/${path}`) 
            .then(res => res.json())
            .then(params =>  done(params))
            .catch(err => console.log(err.message)) 
    }
    

    handleAutorization(response) {
        if (response.error) {
            this.setState({
                authErr: response.error
            })
        } else {
            const self = response.pop()
            
            this.setState({
                status: self.status,
                id: self.id,
                todos: response
            }, () => {
                if (this.state.status == 'admin') {
                    this.get('admin/users_data', this.handleUsers)
                    this.get(`admin/selfname/${this.state.id}`, this.handleSelfName)
                } 
            })

        }
    }

    handleSelfName(response) {

        this.setState({
            name_self: response.name
        })
    }
    
  
    handleUsers(response) {

        this.setState({
            users: response
        })
    }

    updateStateTodo(response) {

        if (response.error) {
            this.setState({
                authErr: response.error
            })
        } else {

            this.setState({
                todos: response
            }, this.removeForm())

        }
    }

    setActiveUser(id_active){
        this.setState({
            id_active: id_active
        })
    }

   
//--------------------------------------------
//-------Для открытия/закрытия формы----------

    createForm(formType, action) {

        this.setState({
            formType: formType,
            action: action,
            message: true
        })
    }

    removeForm(){

        this.setState({
            formType: '',
            action: {},
            message: false
        })
    }

//----------------------------------------------  
 
    render() {
        return (
            <div>
             
                {this.state.formType === 'check' &&
                    <Checked post={this.post} 
                             action={this.state.action}
                             updateStateTodo={this.updateStateTodo}
                             removeForm={this.removeForm}/>
                }
                {this.state.formType === 'add' &&
                    <AddTodo post={this.post}
                             done={this.updateStateTodo}
                             action={this.state.action}
                             removeForm={this.removeForm}/>
                }
                {this.state.formType === 'addUser' &&
                    <AddUser post={this.post}
                             done={this.handleUsers}
                             action={this.state.action}
                             removeForm={this.removeForm}/>
                }
                {this.state.formType === 'completed' &&
                    <Completed post={this.post} 
                               action={this.state.action}
                               updateStateTodo={this.updateStateTodo}
                               removeForm={this.removeForm}/>
                }


                <div className={this.state.message === false ? 'main' : "main message"}>
                   
                
                    
                    {this.state.status === '' &&
                        <Autorization  postReq={this.post} err={this.state.authErr} done={this.handleAutorization}/>
                    }
                    {this.state.status === 'admin' &&
                        <AdminInterfase  postReq={this.post} 
                                         id_admin={this.state.id}
                                         name_admin={this.state.name_self}
                                         todos={this.state.todos} 
                                         userArr={this.state.users}
                                         get={this.get}
                                         updateStateTodo={this.updateStateTodo}
                                         createForm={this.createForm}
                                         userStatus={this.state.status}

                                         setActiveUser={this.setActiveUser}
                                         id_active={this.state.id_active}/>
                    }
                    {this.state.status === 'user' &&
                        <UserInterfase userStatus={this.state.status} id={this.state.id} createForm={this.createForm} post={this.post} todos={this.state.todos}/>
                    }


               

                </div>
            </div>
            
        )
    }
}






 App.propTypes = {

};

export default App;
