import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {registrationService} from '../services/registration.service'
import '../styles/registration.css'

export class Registration extends Component {

    constructor(props){
        super(props);
        this.state = this.getInitialState();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) =>{
        this.setState({
            user : {
                ...this.state.user,
                [e.target.name] : e.target.value
            }
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        const {user} = this.state;
        registrationService.save(user,this.save);
        this.setState(this.getInitialState());
    }

   save = (res)=>{
        if(res){
            alert('Reg success...');
            this.props.history.push('/login');

        }
   }

    getInitialState = () => ({
        user : {
        userId : '',
		userName : '',
		password : '',
		isActive : '',
        userRole : '',
            firstName : '',
			lastName : '',
			age : '',
			gender : '',
			mobileNumber : '',
            emailId : '',
            country : '',
            state : '',
            profession : '',
            pinCode : '',
            recCrtTs : '',
            recUpdTs : ''
    }
    });

    

    render(){

        const mainDiv = {
            border : '2px solid blue',
            width : '500px',
            padding : '20px',
            height: '800px',
            borderRadius: '5px',
            marginLeft: '350px',
            marginTop: '40px'
        }

        const title = {
            textAlign:'center'
        }

        const col = {
            float: 'left',
            width: '200px',
            padding: '20px',
            height : '10px',
        }

        const row = {
            content: "",
            display: 'table',
            clear: 'both'
        }
        
        const input = {
            width: '200px',
            padding: '10px 20px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            boxSizing: 'border-box',
            display: 'block'
        }

        const submit = {
            textAlign: 'center',
            marginLeft: '180px',
            marginTop: '20px',
            width: '100px',
            padding: '10px',
            border: '1px ',
            borderRadius: '4px',
            backgroundColor: 'blue',
            color: 'white'
        } 
        const link = {
            marginLeft: '160px',
        }
        return(
            <div className = "ccontainer">
                <div style= {mainDiv}>
                    <div>
                        <h2 style = {title}>Sign Up</h2>
                    </div>
                <form onSubmit = {this.handleSubmit}>
                    <div className = "row" style = {row}>
                        <div className = "column" style = {col}>
                        First Name   
                        </div>
                        <div className = "column" style = {col}>
                        <input type = "text" style = {input}   name = "firstName" value = {this.state.user.firstName} onChange = {this.handleChange}></input>
                        </div>
                    </div>

                    <div className = "row" style = {row}>
                        <div className = "column" style = {col}>
                           Last Name     
                        </div>
                        <div className = "column" style = {col}>
                        <input type = "text" style = {input}   name = "lastName" value = {this.state.user.lastName} onChange = {this.handleChange}></input>
                        </div>
                    </div>

                    <div className = "row" style = {row}>
                        <div className = "column" style = {col}>
                        Age  
                        </div>
                        <div className = "column" style = {col}>
                        <input type = "date" style = {input} name = "age" value = {this.state.user.age} onChange = {this.handleChange}></input>
                        </div>
                    </div>

                    <div className = "row" style = {row}>
                        <div className = "column" style = {col}>
                        Gender 
                        </div>
                        <div className = "column" style = {col}>
                        <input type = "text" style = {input}   name = "gender" value = {this.state.user.gender} onChange = {this.handleChange}></input>
                        </div>
                    </div>

                    <div className = "row" style = {row}>
                        <div className = "column" style = {col}>
                        Mobile no   
                        </div>
                        <div className = "column" style = {col}>
                        <input type = "number" style = {input} name = "mobileNumber" value = {this.state.user.mobileNumber} onChange = {this.handleChange}></input> 
                        </div>
                    </div>

                    <div className = "row" style = {row}>
                        <div className = "column" style = {col}>
                        Country   
                        </div>
                        <div className = "column" style = {col}>
                        <input type = "text" style = {input}   name = "country" value = {this.state.user.country} onChange = {this.handleChange}></input> 
                        </div>
                    </div>

                    <div className = "row" style = {row}>
                        <div className = "column" style = {col}>
                        State  
                        </div>
                        <div className = "column" style = {col}>
                        <input type = "text" style = {input}   name = "state" value = {this.state.user.state} onChange = {this.handleChange}></input>
                        </div>
                    </div>

                    <div className = "row" style = {row}>
                        <div className = "column" style = {col}>
                        Pincode  
                        </div>
                        <div className = "column" style = {col}>
                        <input type = "text" style = {input}   name = "pinCode" value = {this.state.user.pinCode} onChange = {this.handleChange}></input> 
                        </div>
                    </div>

                    <div className = "row" style = {row}>
                        <div className = "column" style = {col}>
                        profession 
                        </div>
                        <div className = "column" style = {col}>
                        <input type = "text" style = {input}   name = "profession" value = {this.state.user.profession} onChange = {this.handleChange}></input>
                        </div>
                    </div>

                    <div className = "row" style = {row}>
                        <div className = "column" style = {col}>
                        emailId   
                        </div>
                        <div className = "column" style = {col}>
                        <input type = "email" style = {input} name = "emailId" value = {this.state.user.emailId} onChange = {this.handleChange}></input>   
                        </div>
                    </div>
                        <p>Please crete your user credentials....</p>
                    <div className = "row" style = {row}>
                        <div className = "column" style = {col}>
                        User name    
                        </div>
                        <div className = "column" style = {col}>
                        <input type = "text" style = {input}   name = "userName" value = {this.state.user.userName} onChange = {this.handleChange}></input> 
                        </div>
                    </div>

                    <div className = "row" style = {row}>
                        <div className = "column" style = {col}>
                        password 
                        </div>
                        <div className = "column" style = {col}>
                        <input type = "password" style = {input} name = "password" value = {this.state.user.password} onChange = {this.handleChange}></input>  
                        </div>
                    </div>
                    <div>
                        <button type = "submit" style = {submit}>submit</button>
                    </div>
                    <Link to = "/login" style= {link}>Already had account</Link>
                    </form>
                </div>
               
            </div>
        )
    }
}

export default Registration