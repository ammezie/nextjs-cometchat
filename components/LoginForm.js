import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

class LoginForm extends React.Component {
    state = {
        email: '',
        password: ''
    };

    handleChange = event => {
        this.setState({ [event.target.name] : event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
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
                                <span>Don't have an account? <a href="register">Register</a></span>
                                 <div className="d-grid gap-2 mt-4">
                                    <button className="btn btn-primary btn-lg" type="submit">
                                    Sign In
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

export default LoginForm;