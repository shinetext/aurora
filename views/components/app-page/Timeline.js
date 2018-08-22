import React from 'react';
import TimelineItem from './TimelineItem';

export default function() {
  return (
    <div className="timeline">
      <TimelineItem
        imageSrc="images/app-page/LaunchPage-Yellow-Mobile.png"
        header="Daily Motivation"
        subtitle="Things you tell yourself: I can’t, I’m not, I won’t. Things Shine tells you: You got this, be kind to yourself, take it one step at a time. Wake up to daily Shine Texts, bite size, research-backed advice to help you practice self-love, get intentional, and realize you’re not alone in the struggle."
      />
      <TimelineItem
        imageSrc="images/app-page/LaunchPage-Green-Mobile.png"
        header="Shine Talks"
        subtitle="Grow on the go with our Shine Talks, mini meditations, affirmations, and inspirational stories that’ll leave you feeling ready to tackle whatever's ahead. Whether it’s a toxic friend, dating burnout, or you’re just trying to find some chill in your day, sit back and listen. 🎧"
      />
      <TimelineItem
        imageSrc="images/app-page/LaunchPage-Purple-Mobile.png"
        header="Check In With Yourself"
        subtitle="Invest in yourself daily with our check-in feature. We’ll prompt you to log what you’re grateful for and what you’re doing to feel good—it’s like a journal you finally won’t forget to fill out."
      />
    </div>
  );
}
