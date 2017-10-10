import React from 'react';
import FormField from '../FormField';

export default class SplashPage extends React.Component {
  render() {
    return (
      <div className="container-splash-lead">
        <div className="container-splash">
          <div className="splash-top">
            <img src="/images/shine-logo.png" className="splash-logo" />
            <div className="splash-header">Listen Up!</div>
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
                  type="text"
                  value=""
                />
                <label for="first-name">First Name</label>
              </div>
              <div className="splash-form-field">
                <input
                  className="splash-form-control"
                  name="phone-number"
                  type="text"
                  value=""
                />
                <label for="phone-number">Phone Number</label>
              </div>
              <div className="splash-form-field">
                <input
                  className="splash-form-control"
                  name="email"
                  type="text"
                  value=""
                />
                <label for="email">Email</label>
              </div>
              <div className="splash-bottom">
                <div className="splash-button">
                  <button type="submit" className="get-notified">
                    Get Notified!
                  </button>
                </div>
                <div className="splash-image" />
              </div>
            </form>
          </div>
        </div>

        <div className="container-splash-desktop">
          <div className="desktop-container-splash">
            <div className="desktop-splash-top">
              <img src="/images/shine-logo.png" className="desktop-splash-logo" />
              <div className="desktop-splash-header">Listen Up!</div>
              <div className="desktop-splash-subtitle">
                We've got a new product launching soon. Sign up to be the first
                to get the scoop.
              </div>
            </div>
            <div className="desktop-splash-signup-form">
              <form>
                <div className="splash-form-field">
                  <input
                    className="splash-form-control"
                    name="first-name"
                    type="text"
                    value=""
                  />
                  <label for="first-name">First Name</label>
                </div>
                <div className="splash-form-field">
                  <input
                    className="splash-form-control"
                    name="phone-number"
                    type="text"
                    value=""
                  />
                  <label for="phone-number">Phone Number</label>
                </div>
                <div className="splash-form-field">
                  <input
                    className="splash-form-control"
                    name="email"
                    type="text"
                    value=""
                  />
                  <label for="email">Email</label>
                </div>
              </form>
            </div>
          </div>
          <div className="desktop-image">
            <img src="https://images.contentful.com/awpxl2koull4/2taChd2Wa0CCKa8AGOOAIc/7c11ee98a301959a58cb94d3702f8bf3/Web-figure.png" />
          </div>
        </div>
      </div>
    );
  }
}
