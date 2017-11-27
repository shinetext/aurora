import React from 'react';

export default function() {
  return (
    <section className="desktop-container">
      <div className="desktop-first-section">
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
          <img className="download-button" src="/images/app-page/LaunchPage-AppleStoreBadge-Mobile.png" />
        </div>
        <div className="right">
          <video
            id="video-2"
          >
            <source src="/images/app-page/vid-app-3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="desktop-second" />
    </section>
  );
}
