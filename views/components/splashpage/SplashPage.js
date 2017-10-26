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
            <div className="splash-header">Hear it first.</div>
            <div className="splash-subtitle">
              Psst: we've got something big coming soon. Sound interesting? Sign
              up to be <strong>first</strong> to find out what it is and when it
              launches.
            </div>
          </div>
          <div className="splash-signup-form">
            <form
              action="https://shinetext.us14.list-manage.com/subscribe/post?u=3509707e26340578cd6281c2d&amp;id=2b48e43c6c"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              class="validate"
              target="_blank"
              novalidate
            >
              <input
                type="hidden"
                value="8388608"
                name="group[207][8388608]"
                id="mce-group[207]-207-0"
                checked
              />
              <div className="splash-form-field">
                <input
                  className="form-control"
                  type="email"
                  value=""
                  name="EMAIL"
                  id="mce-EMAIL"
                />
                <label for="mce-EMAIL">Email</label>
              </div>
              <div className="splash-form-field">
                <input
                  className="form-control"
                  value=""
                  type="text"
                  name="FNAME"
                  id="mce-FNAME"
                />
                <label for="mce-FNAME">First Name</label>
              </div>
              <div className="splash-form-field">
                <input
                  className="form-control"
                  type="text"
                  name="PHONE"
                  value=""
                  id="mce-PHONE"
                />
                <label for="mce-PHONE">Phone Number</label>
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
                    Notify Me
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
              <div className="desktop-splash-header">Hear it first.</div>
              <div className="desktop-splash-subtitle">
                Psst: we've got something big coming soon. Sound interesting?
                Sign up to be <strong>first</strong> to find out what it is and
                when it launches.
              </div>
            </div>
            <div className="desktop-splash-signup-form">
              <form
                action="https://shinetext.us14.list-manage.com/subscribe/post?u=3509707e26340578cd6281c2d&amp;id=2b48e43c6c"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                class="validate"
                target="_blank"
                novalidate
              >
                <input
                  type="hidden"
                  value="8388608"
                  name="group[207][8388608]"
                  id="mce-group[207]-207-0"
                  checked
                />

                <div className="splash-form-field">
                  <input
                    className="form-control"
                    type="email"
                    value=""
                    name="EMAIL"
                    id="mce-EMAIL"
                  />
                  <label for="mce-EMAIL">Email</label>
                </div>
                <div className="splash-form-field">
                  <input
                    className="form-control"
                    value=""
                    type="text"
                    name="FNAME"
                    id="mce-FNAME"
                  />
                  <label for="mce-FNAME">First Name</label>
                </div>
                <div className="splash-form-field">
                  <input
                    className="form-control"
                    type="text"
                    name="PHONE"
                    value=""
                    id="mce-PHONE"
                  />
                  <label for="mce-PHONE">Phone Number</label>
                </div>
                <div className="splash-button">
                  <button
                    type="submit"
                    className="get-notified button"
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                  >
                    Notify Me
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="desktop-image">
            <img src="https://images.contentful.com/awpxl2koull4/7FVydJIS9aYokIQK842ySk/58b9a7192f54c7413e66d5f84d001e82/Figure3-web.png" />
          </div>
        </div>
      </div>
    );
  }
}
