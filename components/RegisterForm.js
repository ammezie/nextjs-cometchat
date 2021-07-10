import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { registerUser } from '../lib/auth'
import Router from 'next/router'
class RegisterForm extends React.Component {

    state = {
        name: ''
    };

    handleChange = event => {
        this.setState({ [event.target.name] : event.target.value });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const name = this.state.name;
        const uid = name.replace(/\s/g, '');

        let response = await registerUser(uid, name);
        

        if(response) {
            await localStorage.setItem('user', JSON.stringify(response.data.data));
            Router.push('/chat');
        }
        
    }

    render() {
        return (
            <div className="login-form">
                <div className="row">
                    <div className="card col-10 col-sm-4">
                        <div className="card-body">
                            <form onSubmit={ this.handleSubmit }>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInput" name="name" onChange={ this.handleChange } placeholder="Enter name" />
                                    <label htmlFor="floatingInput">Name</label>
                                </div>
                                <span>Already have an account? <a href="login">Login</a></span>
                                 <div className="d-grid gap-2 mt-4">
                                    <button className="btn btn-primary btn-lg" type="submit">
                                    Register
                                    </button>
                                </div>
                            </form> 
                        </div>
                    </div>
                </div>
            </div> 
        )
    }
}

export default RegisterForm;