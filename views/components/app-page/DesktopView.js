import React from 'react';

export default function() {
  return (
    <section className="desktop-container">
      <div className="desktop-first-section scrollify-section">
        <div className="left">
          <a href="/">
            <img
              src="/images/app-page/LaunchPage-Logo-Mobile.png"
              className="icon"
            />
          </a>
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
          <img src="/images/app-page/Phone-LifeIsComplicated.png" />
        </div>
      </div>
      <div className="desktop-second-section">
        <div className="border" />
        <div className="content-sections scrollify-section">
          <img src="/images/app-page/Phone-CheckInWithYourself.png" />
          <div className="quick-hitter-logo">
            <img src="/images/app-page/LaunchPage-Green-Mobile.png" />
          </div>
          <div className="textbox">
            <h3>Daily Motivation</h3>
            <p>
              Things you tell yourself: I can’t, I’m not, I won’t. Things Shine
              tells you: You got this, be kind to yourself, take it one step at
              a time. Wake up to daily Shine Texts, bite size, research-backed
              advice to help you practice self-love, get intentional, and
              realize you’re not alone in the struggle.
            </p>
          </div>
        </div>
        <div className="content-sections scrollify-section">
          <img src="/images/app-page/Phone-ShineTalks.png" />
          <div className="quick-hitter-logo">
            <img src="/images/app-page/LaunchPage-Purple-Mobile.png" />
          </div>
          <div className="textbox">
            <h3>Shine Talks</h3>
            <p>
              Grow on the go with our Shine Talks, mini meditations,
              affirmations, and inspirational stories that’ll leave you feeling
              ready to tackle whatever's ahead. Whether it’s a toxic friend,
              dating burnout, or you’re just trying to find some chill in your
              day, sit back and listen. 🎧
            </p>
          </div>
        </div>

        <div className="content-sections scrollify-section">
          <img src="/images/app-page/Phone-CheckInWithYourself.png" />
          <div className="quick-hitter-logo">
            <img src="/images/app-page/LaunchPage-Yellow-Mobile.png" />
          </div>
          <div className="textbox">
            <h3>Check In With Yourself</h3>
            <p>
              Invest in yourself daily with our check-in feature. We’ll prompt
              you to log what you’re grateful for and what you’re doing to feel
              good—it’s like a journal you finally won’t forget to fill out.
            </p>
          </div>
        </div>
      </div>
      <div className="desktop-footer scrollify-section">
        <div className="footer-textarea">
          <h3>Get Shine Now</h3>
          <p>Making self-care easy so you can live like you want.</p>
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
