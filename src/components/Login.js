import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { loginService } from '../services/login.service'
import '../styles/login.css'
export class Login extends Component {

    constructor(props) {
        super(props);
        this.state = this.getInitialState();
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    getInitialState = () => ({
        auth: {
            userName: '',
            password: ''
        }
    })

    handleChange = (e) => {
        this.setState({
            auth: {
                ...this.state.auth,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { auth } = this.state;
        loginService.login(auth, this.handleLoginRes);
    }

    handleLoginRes = (data) => {
        if (data === 'INVALID') {
            alert("Invalid username or password....");
        }
        else {
            localStorage.setItem("userId", data[0].userId);
            this.props.history.push('/products');
        }
    }

    render() {
        const maindiv = {
            // width: '420px',
            // padding: '20px',
            // border: '2px solid blue',
            // borderRadius: '5px',
            
            // margin:'12% auto',
            // justifyContent:'center',
            // height: '250px',
            // backgroundColor: '#f2f2f2',
        }

        const title = {
            //textAlign: 'center'
        }

        const input = {
            // width: '400px',
            // padding: '10px 20px',
            // border: '1px solid #ccc',
            // borderRadius: '4px',
            // boxSizing: 'border-box',
            // display: 'block'
        }

        const submit = {
            // textAlign: 'center',
            // marginLeft: '160px',
            // marginTop: '30px',
            // width: '100px',
            // padding: '10px',
            // border: '1px ',
            // borderRadius: '4px',
            // backgroundColor: 'blue',
            // color: 'white'
        }

        const link = {
            //marginLeft: '160px',
        }
        return (
            <body>
            <div className="container">
                <div  className = "formBox">
                    <div className="header">
                        <h2>Sign in</h2>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                            <div className="inputBox">
                                <label>Username</label>
                                <input type="text" name="userName" value={this.state.auth.userName} 
                                onChange={this.handleChange} ></input>
                             </div>
                            <div className="inputBox">
                                <label>Password</label>
                                <input type="password" name="password" value={this.state.auth.password}
                                 onChange={this.handleChange}></input>
                            </div>
                            <div className="btn-box">
                                <button type="submit" className="btn-cls">Submit</button>
                            </div>
                    </form>
                        <div className="link-cls">
                            <Link to="/registration" style={link}>Registration</Link>
                        </div>
                        
                </div>
            </div>
            </body>
        )
    }
}
export default Login