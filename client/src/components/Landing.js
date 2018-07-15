import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

class Landing extends Component {
    render() {
      return (
        <div>
            <section className="hero is-medium is-dark is-bold">
                <div className="hero-body">
                <h2>Milestone 2 Video</h2>

                    <video width="90%" height="90%" controls autoplay><source src="https://tinytake.s3.amazonaws.com/pulse/reynro89-gmail/attachments/8292755/TinyTake15-07-2018-01-49-29.mp4" type="video/mp4" />Your browser does not support the video tag.</video><br /><a href="http://www.tinytake.com" title="Powered by TinyTake Screen Capture">Powered by TinyTake Screen Capture</a>
                </div>
            </section>
                
            


        </div>
      );
    }
  }
  
  export default Landing;
  