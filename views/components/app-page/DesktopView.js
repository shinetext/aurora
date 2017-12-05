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
          <h1>Mindful moments made for you</h1>
          <p>
            Reclaim me-time with the first mindfulness app that speaks your
            language.
          </p>
          <a href="https://itunes.apple.com/us/app/shine-daily-motivation/id1293721589?ls=1&mt=8">
            <img
              className="download-button"
              src="/images/app-page/LaunchPage-AppleStoreBadge-Mobile.png"
            />
          </a>
        </div>
        <div className="right">
          <img src="/images/app-page/LaunchPage-Video-Mobile.png" />
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
          <img src="/images/app-page/iPhone-White-MindfulMoments.png" />
          <div className="quick-hitter-logo">
            <img src="/images/app-page/LaunchPage-Purple-Mobile.png" />
          </div>
          <div className="textbox">
            <h3>Mindful Moments</h3>
            <p>
              Find calm on the fly—around whatever issue you’re struggling with.
              Whether it’s a toxic friend, dating burnout, or you’re just trying
              to find some chill in your day, sit back and listen.
            </p>
          </div>
        </div>

        <div className="content-sections scrollify-section">
          <img src="/images/app-page/iPhone-ShineOnDemand.png" />
          <div className="quick-hitter-logo">
            <img src="/images/app-page/LaunchPage-Yellow-Mobile.png" />
          </div>
          <div className="textbox">
            <h3>Shine On Demand</h3>
            <p>
              Interact with hundreds of Mindful Moments & maintain that
              long-term emotional health.
            </p>
          </div>
        </div>
      </div>
      <div className="desktop-footer scrollify-section">
        <div className="footer-textarea">
          <h3>Get Shine Now</h3>
          <p>
            Get your me time back with the first mindfulness app that speaks
            your language.
          </p>
          <a href="https://itunes.apple.com/us/app/shine-daily-motivation/id1293721589?ls=1&mt=8">
            <img
              className="footer-download-button"
              src="/images/app-page/LaunchPage-AppleStoreBadge-Mobile.png"
            />
          </a>
        </div>
        <img
          className="footer-image"
          src="/images/app-page/LaunchPage-Bossgirl-Desktop.png"
        />
      </div>
    </section>
  );
}
