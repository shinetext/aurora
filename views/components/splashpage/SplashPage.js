import React from 'react';
import FormField from '../FormField';

export default class SplashPage extends React.Component {
  render() {
    return (
      <div className="container-splash-lead">
        <div className="container-splash">
          <div className="splash-top">
            <img
              src="/images/Shine-logo-original.png"
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
              action="https://shinetext.us14.list-manage.com/subscribe/post"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              class="validate"
              target="_blank"
              novalidate
            >
              <input type="hidden" name="u" value="3509707e26340578cd6281c2d" />
                <input type="hidden" name="id" value="8ca1941e29"/>
              <div className="splash-form-field">
                <input
                  className="form-control"
                  type="email"
                  value=""
                  name="MERGE0"
                  id="MERGE0"
                />
                <label for="MERGE0">Email</label>
              </div>
              <div className="splash-form-field">
                <input
                  className="form-control required email"
                  value=""
                  type="text"
                  name="MERGE1"
                  id="MERGE1"
                />
                <label for="MERGE1">First Name</label>
              </div>
              <div className="splash-form-field">
                <input
                  className="form-control"
                  type="text"
                  name="MERGE3"
                  value=""
                  id="MERGE3"
                />
                <label for="MERGE3">Phone Number</label>
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
                    Get Notified
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
                src="/images/Shine-logo-original.png"
                className="desktop-splash-logo"
              />
              <div className="desktop-splash-header">Listen Up!</div>
              <div className="desktop-splash-subtitle">
                We've got a new product launching soon. Sign up to be the first
                to get the scoop.
              </div>
            </div>
            <div className="desktop-splash-signup-form">
              <form
                action="https://shinetext.us14.list-manage.com/subscribe/post"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                class="validate"
                target="_blank"
                novalidate
              >
                <input type="hidden" name="u" value="3509707e26340578cd6281c2d" />
                <input type="hidden" name="id" value="8ca1941e29"/>
                <div className="splash-form-field">
                  <input
                    className="form-control required email"
                    value=""
                    type="email"
                    name="MERGE0"
                    id="MERGE0"
                  />
                  <label for="MERGE0">Email</label>
                </div>
                <div className="splash-form-field">
                  <input
                    className="form-control"
                    type="text"
                    value=""
                    name="MERGE1"
                    id="MERGE1"
                    required
                  />
                  <label for="MERGE1">First Name</label>
                </div>
                <div className="splash-form-field">
                  <input
                    className="form-control"
                    type="text"
                    name="MERGE3"
                    value=""
                    id="MERGE3"
                  />
                  <label for="MERGE3">Phone Number</label>
                </div>
                <div className="splash-button">
                  <button
                    type="submit"
                    className="get-notified button"
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                  >
                    Get Notified
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="desktop-image">
            <img src="https://images.contentful.com/awpxl2koull4/2NHsdgj8NGC086Wcgu4OeY/fd00736874115140b113ccb939d31d67/Model2_copy.png" />
          </div>
        </div>
      </div>
    );
  }
}
