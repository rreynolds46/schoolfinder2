import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../App.css';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Register from './Register';
import Login from './Login';
import StudentProfile from './StudentProfile';
import CollegeProfile from './CollegeProfile';
import SchoolSearch from './SchoolFinder';
import StudentSearch from './StudentFinder';
import AuthMain from './Auth';

const history = createBrowserHistory();
class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }


  render() {
    const { userSignup, userLogin } = this.props;
    return (
        <Router history={history}>
          <div className="App">
            <Header />
            <Route exact path='/' component={Landing} />
            <Route 
              path='/users/:userID'
              component={StudentProfile} 
            />
            <Route
              path='/schools/:school'
              component={CollegeProfile}
            />
            <Route exact path='/auth' render={ (props) => <AuthMain {...props} /> } />
            <Route exact path='/register' render={ (props) => <Register {...props} userSignup={userSignup} />}/>
            <Route exact path='/login' render={ (props) => <Login {...props} userLogin={userLogin} /> }/> 
            <Route exact path='/find/schools/' component={SchoolSearch} />
            <Route exact path='/find/students/' component={StudentSearch} />
          </div>
        </Router>
    );
  }
}

App.propTypes = {
  userSignup: PropTypes.func.isRequired,
  userLogin: PropTypes.func.isRequired,
  surveyEdit: PropTypes.func.isRequired
}

function mapStateToProps(state, ownProps) {
  return state;
}
export default connect(mapStateToProps, actions)(App);
