import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { userLogin } from '../actions/loginActions';
import { connect } from 'react-redux';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errors: {},
            isLoading: false,
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();
        this.setState({ errors: {}, isLoading: true });
        this.props.userLogin(this.state);
    }

    render() {
        const { errors, identifier, password, isLoading } = this.setState;
      return (
        <div>
            <section className='container column is-one-fifth'>
                <form onSubmit={this.onSubmit}>
                    <div className="field">
                        <div className="control">
                            <input className="input"
                             value={this.state.username} 
                             onChange={this.onChange.bind(this)}
                             type="text" 
                             name='username' 
                             placeholder="E-Mail" />
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <input className="input" 
                            type="password" 
                            value={this.state.password} 
                            onChange={this.onChange.bind(this)}
                            name='password' 
                            placeholder="Password" />
                        </div>
                    </div>
                    <div className="control">
                        <button type='submit' className="button is-primary">Submit</button>
                    </div>



                </form>
            </section>

                
            


        </div>
      );
    }
  }

  Login.propTypes = {
      userLogin: PropTypes.func.isRequired
  }

  Login.contextTypes = {
      router: PropTypes.object.isRequired
  }

  export default connect(null,{userLogin})(Login);
  