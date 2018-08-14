import React from 'react';

export default function() {
  return (
    <section className="desktop-container">
      <div className="desktop-first-section scrollify-section">
        <div className="left">
          <img
            src="/images/app-page/LaunchPage-Logo-Mobile.png"
            className="icon"
          />
          <h1>Life is complicated— self-care shouldn’t be.</h1>
          <p>
            The Shine app is your daily self-care sidekick, helping you grow one
            Shine Text or Shine Talk at a time.
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
        <div className="right">
          <a href="https://youtu.be/j4C6SBHhSlo" target="_blank">
            <img src="/images/app-page/LaunchPage-Video-Mobile.png" />
          </a>
        </div>
      </div>
      <div className="desktop-second-section">
        <div className="border" />
        <div className="content-sections scrollify-section">
          <img src="/images/app-page/iPhone-DailyMotivation.png" />
          <div className="quick-hitter-logo">
            <img src="/images/app-page/LaunchPage-Green-Mobile.png" />
          </div>
          <div className="textbox">
            <h3>Daily Motivation</h3>
            <p>
              Need a reminder that you’re doing the best you can? We got you.
              Wake up to daily Shine Texts to help you practice self-love and
              remind you that you’re not alone in the struggle.
            </p>
          </div>
        </div>
        <div className="content-sections scrollify-section">
          <img src="/images/app-page/iPhone-ShineOnDemand.png" />
          <div className="quick-hitter-logo">
            <img src="/images/app-page/LaunchPage-Purple-Mobile.png" />
          </div>
          <div className="textbox">
            <h3>Mindful Moments</h3>
            <p>
              Find calm on the fly—around whatever issue you’re struggling with.
              Whether it’s a toxic friend, dating burnout, or you’re just trying
              to find some chill in your day, sit back and listen. 🎧
            </p>
          </div>
        </div>

        <div className="content-sections scrollify-section">
          <img src="/images/app-page/iPhone-White-MindfulMoments.png" />
          <div className="quick-hitter-logo">
            <img src="/images/app-page/LaunchPage-Yellow-Mobile.png" />
          </div>
          <div className="textbox">
            <h3>Shine On Demand</h3>
            <p>
              Customize your Mindful Moments by sharing more about your
              situation. It’s like a cross between meditation and a call with a
              friend. 💯
            </p>
          </div>
        </div>
      </div>
      <div className="desktop-footer scrollify-section">
        <div className="footer-textarea">
          <h3>Get Shine Now</h3>
          <p>
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
        <img
          className="footer-image"
          src="/images/app-page/LaunchPage-Bossgirl-Desktop.png"
        />
      </div>
    </section>
  );
}
