import React from 'react';

export default function() {
  return (
    <section className="desktop-container">
      <div
        className="desktop-first-section scrollify-section"
        data--500-bottom-center="transform: translateY(0%); opacity: 1;"
        data--500-bottom-bottom="translateY(25%); opacity: 0.2;"
      >
        <div className="left">
          <img
            src="/images/app-page/LaunchPage-Logo-Mobile.png"
            className="icon"
          />
          <h1>Mindful moments for any situation.</h1>
          <p>
            Hit PAUSE on the day and take a moment to show some love—and care—to
            yourself.
          </p>
          <img
            className="download-button"
            src="/images/app-page/LaunchPage-AppleStoreBadge-Mobile.png"
          />
        </div>
        <div className="right">
          <video id="video-2" preload="auto">
            <source src="" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="desktop-second-section">
        <div className="border" />
        <div
          className="content-sections scrollify-section"
          data-bottom-top="transform: translateY(-25%); opacity: 0.2;"
          data--500-bottom-center="transform: translateY(0%); opacity: 1;"
          data--500-bottom-bottom="translateY(25%); opacity: 0.2;"
        >
          <img src="/images/app-page/LaunchPage-Video-Mobile.png" />
          <img
            className="quick-hitter-logo"
            src="/images/app-page/LaunchPage-Yellow-Mobile.png"
          />
          <div className="textbox">
            <h3>Daily Motivation</h3>
            <p>
              Wake up to daily Shine Texts to help you improve on your
              wellbeing.
            </p>
          </div>
        </div>
        <div
          className="content-sections scrollify-section"
          data-bottom-top="transform: translateY(-25%); opacity: 0.2;"
          data--500-bottom-center="transform: translateY(0%); opacity: 1;"
          data--500-bottom-bottom="translateY(25%); opacity: 0.2;"
        >
          <img src="/images/app-page/LaunchPage-Video-Mobile.png" />
          <img
            className="quick-hitter-logo"
            src="/images/app-page/LaunchPage-Purple-Mobile.png"
          />
          <div className="textbox">
            <h3>Mindful Moments</h3>
            <p>
              Press pause on your busy schedule and destress with a quick audio
              affirmations.
            </p>
          </div>
        </div>

        <div
          className="content-sections scrollify-section"
          data-bottom-top="transform: translateY(-25%); opacity: 0.2;"
          data--500-bottom-center="transform: translateY(0%); opacity: 1;"
          data--500-bottom-bottom="translateY(25%); opacity: 0.2;"
        >
          <img src="/images/app-page/LaunchPage-Video-Mobile.png" />
          <img
            className="quick-hitter-logo"
            src="/images/app-page/LaunchPage-Green-Mobile.png"
          />

          <div className="textbox">
            <h3>Shine On Demand</h3>
            <p>
              Interact with hundreds of Mindful Moments & maintain that
              long-term emotional health.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
