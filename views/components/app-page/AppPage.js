import React, { Component } from 'react';
import Timeline from './Timeline';
export default class AppPage extends Component {
  render() {
    return (
      <div className="app-page-container">
        <section className="mobile-container">
          <section className="mobile-header">
            <div className="mobile-header-top">
              <img
                src="/images/app-page/LaunchPage-Logo-Mobile.png"
                className="icon"
              />
              <h1>Mindful 🎧 moments for any situations.</h1>
              <p>
                Hit PAUSE on the day and take a moment to show some love—and
                care—to yourself.
              </p>
            </div>
            <div className="mobile-header-bottom">
              <img src="/images/app-page/LaunchPage-AppleStoreBadge-Mobile.png" />
            </div>
          </section>
          <section className="mobile-middle">
            <div className="middle-top">
              <video
                id="video"
              >
                <source src="/images/app-page/vid-app-2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="middle-bottom">
              <Timeline />
            </div>
          </section>
          <section className="mobile-bottom">
            <div className="mobile-bottom-top">
              <h3 className="mobile-bottom-header">Get the App Now</h3>
              <p className="mobile-bottom-subtitle">
                Press pause on your busy schedule and destress with a quick
                audio affirmations.
              </p>
              <img
                src="/images/app-page/LaunchPage-AppleStoreBadge-Mobile.png"
                className="mobile-bottom-button"
              />
            </div>
            <div className="mobile-bottom-bottom">
              <img
                src="https://images.contentful.com/awpxl2koull4/4bSBano9gkck2wCMCoo8ec/709dcf1b951c34f0afce5c142b0671d2/LaunchPage-Bossgirl-Mobile.png"
                className="bottom-image"
              />
            </div>
          </section>
        </section>
        <div className="desktop-container" />
      </div>
    );
  }
}
