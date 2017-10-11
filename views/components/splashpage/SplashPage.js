import React from 'react';
import FormField from '../FormField';

export default class SplashPage extends React.Component {
  render() {
    return (
      <div className="container-splash-lead">
        <div className="container-splash">
          <div className="splash-top">
            <img
              src="/images/shine-logo-original.png"
              className="splash-logo"
            />
            <div className="splash-header">Listen Up!</div>
            <div className="splash-subtitle">
              We've got a new product launching soon. Sign up to be the first to
              get the scoop.
            </div>
          </div>
          <div className="splash-signup-form">
            <form
              action="https://herokuapp.us16.list-manage.com/subscribe/post?u=c425e0f0036c8419c743da9f9&amp;id=a5df199522"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              class="validate"
              target="_blank"
              novalidate
            >
              <div className="splash-form-field">
                <input
                  className="form-control"
                  type="text"
                  value=''
                  name="FNAME"
                  id="mce-FNAME"
                />
                <label for="FNAME">First Name</label>
              </div>
              <div className="splash-form-field">
                <input
                  className="form-control required email"
                  value=''
                  type="email"
                  name="EMAIL"
                  id="mce-EMAIL"
                />
                <label for="EMAIL">Email</label>
              </div>
              <div className="splash-form-field">
                <input
                  className="form-control"
                  type="text"
                  name="MMERGE2"
                  value=''
                  id="mce-MMERGE2"
                />
                <label for="MMERGE2">Phone Number</label>
              </div>
              <div className="splash-bottom">
                <div className="splash-button">
                  <button
                    type="submit"
                    className="get-notified button"
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                  >
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
              <img
                src="/images/shine-logo-original.png"
                className="desktop-splash-logo"
              />
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
                    className="form-control"
                    type="text"
                    value=''
                    name="FNAME"
                    id="mce-FNAME"
                    required
                  />
                  <label for="mce-FNAME">First Name</label>
                </div>
                <div className="splash-form-field">
                  <input
                    className="form-control required email"
                    value=''
                    type="email"
                    name="EMAIL"
                    id="mce-EMAIL"
                  />
                  <label for="mce-EMAIL">Email</label>
                </div>
                <div className="splash-form-field">
                  <input
                    className="form-control"
                    type="text"
                    name="MMERGE2"
                    value=''
                    id="mce-MMERGE2"
                  />
                  <label for="mce-MMERGE2">Phone Number</label>
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
