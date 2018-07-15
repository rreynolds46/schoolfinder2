import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import PropTypes from 'prop-types';

import './header.css';


class Header extends Component {
    logout(e) {
        e.preventDefault();
        this.props.userLogout();
    }

renderContent() {
    switch(this.props.auth) {
        case null:
            return '';
        case false:
            return(
            <div className='navbar-end'>
                <a className='navbar-item' href='/register'>Register</a>
                <a className='navbar-item' href='/login'>Login</a> 
            </div>
            );
        default:
            
            const studentProf = this.props.auth._id;
            if(this.props.auth.grouping === 'student') {
                return (
                    <div className='navbar-menu'>
                        <div className='navbar-start'>
                            <a className='navbar-item' href={'/users/' + studentProf}>Profile</a>

                            <a className='navbar-item' href='/find/schools'>Find Schools</a>
                        </div>
                        <div className='navbar-end'>
                            <a className='navbar-item' onClick={this.logout.bind(this)}>Logout</a>
                        </div>
                    </div>
                    );      
            } else {
            return (
            <div className='navbar-menu'>
                <div className='navbar-end'>
                    <a className='navbar-item' href={'/schools/' + studentProf}>Profile</a>
                    <a className='navbar-item' href='/'>Students</a>
                    <a className='navbar-item' href='/api/signout'>Logout</a>
                </div>
            </div>
            );     
        }
        }
}

    render() {
      return (
    <nav className='navbar'>
        <div className='navbar-brand'>
            <a className='navbar-item' href='/'>schoolfinder</a>
        </div>
        {this.renderContent()}
    </nav>
      );
    }
  }

  Header.proptypes = {
      userLogout: PropTypes.func.isRequired
  }

  function mapStateToProps({ auth }) {
    return { auth };
  }
  
  export default connect(mapStateToProps, actions)(Header);
  