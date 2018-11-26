import React, { Component } from 'react';
import PropTypes from 'prop-types';


const propTypes = {
    postReq: PropTypes.func.isRequired,
    done: PropTypes.func.isRequired
};



class Autorization extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };
        console.log(this.state.func)

        this.autorization = this.autorization.bind(this);
        
    }

    autorization(event) {
        event.preventDefault();
        const path = 'auth';

        let bodyPost = '';
        for (const field in this.refs) {

            bodyPost = bodyPost + `${field}=${this.refs[field].value}&`;
        }
        
        this.props.postReq(path ,bodyPost.slice(0,-1), this.props.done)

    }

   

    render() {
        return (
            <div className="login-page">
                <div className="form">
                    <form className="login-form" onSubmit={this.autorization}>
                        <input type="text" ref="login" placeholder="логин" />
                        <input type="text" ref="password" placeholder="пароль" />
                        <button>войти</button>
                    </form>
                </div>
                <div>{this.props.err}</div>
            </div>

        );
    }
}







Autorization.propTypes = propTypes;


export default Autorization;



