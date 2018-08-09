import React from 'react';
import Timeline from './Timeline';

export default function() {
  return (
    <section className="mobile-container">
      <section className="mobile-header">
        <div className="mobile-header-top">
          <a href="/">
            <img
              src="/images/app-page/LaunchPage-Logo-Mobile.png"
              className="icon"
            />
          </a>
          <h1>You deserve a Mindful Moment.</h1>
          <p>
            Take back me time with the Shine app. We’ll treat you like the
            friend you’ve always wanted.
          </p>
        </div>
        <div className="mobile-header-bottom">
          <div className="download-container">
            <a
              className="download-button-link"
              href="https://shineapp.onelink.me/Unhk/35044d63"
            >
              <img
                className="download-button-img"
                src="/images/app-page/LaunchPage-AppleStoreBadge-Mobile.png"
              />
            </a>
            <a className="download-android-link" href="/coming-soon-android">
              <p className="download-android-text">
                Looking For Android?
              <img
                className="download-android-img"
                src="/images/app-page/LaunchPage-AndroidRobot.png"
              />
              </p>
            </a>
          </div>
        </div>
      </section>
      <section className="mobile-middle">
        <div className="middle-top">
          <video preload="auto" id="video">
            <source
              data-src="/images/app-page/vid-app-5.mp4"
              type="video/mp4"
            />
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
            Get your me time back with the first mindfulness app that speaks{' '}
            <i>your</i> language.
          </p>
          <div className="download-container">
          <a
            className="download-button-link"
            href="https://shineapp.onelink.me/Unhk/35044d63"
          >
            <img
              className="download-button-img"
              src="/images/app-page/LaunchPage-AppleStoreBadge-Mobile.png"
            />
          </a>
          <a className="download-android-link" href="/coming-soon-android">
            <p className="download-android-text">
              Looking For Android?
              <img
                className="download-android-img"
                src="/images/app-page/LaunchPage-AndroidRobot.png"
              />
            </p>
          </a>
        </div>
        </div>
        <div className="mobile-bottom-bottom">
          <img
            src="https://images.ctfassets.net/awpxl2koull4/4bSBano9gkck2wCMCoo8ec/709dcf1b951c34f0afce5c142b0671d2/LaunchPage-Bossgirl-Mobile.png"
            className="bottom-image"
          />
        </div>
      </section>
    </section>
  );
}
