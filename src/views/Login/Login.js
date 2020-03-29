import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
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

    signup = (e) => {
        e.preventDefault();
        const { userRegister } = this.props;
        const credentials = {
            username: this.state.username,
            email: this.state.email,
            password1: this.state.password,
            password2: this.state.password
        }
        this.setState({
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        });

        userRegister(credentials);
    }

    render() {
        const { username, email, password } = this.state;
    
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
                <form onSubmit={this.signup}>
                    <h5>First time user?</h5>
                    <label>username: </label>
                    <input type="text" name="username" value={username} onChange={this.handleChange}/>
                    <label>email: </label>
                    <input type="email" name="email" value={email} onChange={this.handleChange}/>
                    <label>password: </label>
                    <input type="password" name="password" value={password} onChange={this.handleChange}/>
                    <label>Confirm password: </label>
                    <input type="password" name="password" value={password} onChange={this.handleChange}/>
                    <button type="submit">Sign up</button>
                </form>
            </div>
        );
    }
}

export default Login;
