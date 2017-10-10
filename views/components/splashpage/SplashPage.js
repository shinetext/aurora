import React from 'react';
import FormField from '../FormField';

export default class SplashPage extends React.Component {
  render() {
    return (
      <div className="container-splash-lead">
        <div className="container-splash">
          <div className="splash-top">
            <div className="splash-logo">LOGO</div>
            <div className="splash-header">
              Listen Up!
            </div>
            <div className="splash-subtitle">
              We've got a new product launching soon. Sign up to be the first to
              get the scoop.
            </div>
          </div>
          <div className="splash-signup-form">
            <form>
              <div className="splash-form-field">
                <input
                  className="splash-form-control"
                  name="first-name"
                  id="first-name"
                  type="text"
                  value=""
                />
                <label for="first-name">First Name</label>
              </div>
              <div className="splash-form-field">
                <input
                  className="splash-form-control"
                  name="phone-number"
                  id="phone-number"
                  type="text"
                  value=""
                />
                <label for="phone-number">Phone Number</label>
              </div>
              <div className="splash-form-field">
                <input
                  className="splash-form-control"
                  name="email"
                  id="email"
                  type="text"
                  value=""
                />
                <label for="email">Email</label>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
