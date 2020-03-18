import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    login = (e) => {
        e.preventDefault();
        const { userLogin } = this.props;
        const credentials = {
            username: this.state.username,
            password: this.state.password
        }
        this.setState({
            username: this.state.username,
            password: this.state.password
        });

        userLogin(credentials);
    }

    render() {
        const { username, password } = this.state;
    
        return (
            <div className="login-view">
                <form onSubmit={this.login}>
                    <h1>Login</h1>
                    <label>username: </label>
                    <input type="text" name="username" value={username} onChange={this.handleChange}/>
                    <label>password: </label>
                    <input type="password" name="password" value={password} onChange={this.handleChange}/>
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default Login;
