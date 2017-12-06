import React from 'react';
import TimelineItem from './TimelineItem';

export default function() {
  return (
    <div className="timeline">
      <TimelineItem
        imageSrc="images/app-page/LaunchPage-Yellow-Mobile.png"
        header="Daily Motivation"
        subtitle="Wake up to daily Shine Texts to help you improve on your wellbeing."
      />
      <TimelineItem
        imageSrc="images/app-page/LaunchPage-Green-Mobile.png"
        header="Mindful Moments"
        subtitle="Press pause on your busy schedule and destress with a quick audio affirmations."
      />
      <TimelineItem
        imageSrc="images/app-page/LaunchPage-Purple-Mobile.png"
        header="Shine On Demand"
        subtitle="Interact with hundreds of Mindful Moments & maintain that long-term emotional health."
      />
    </div>
  );
}
