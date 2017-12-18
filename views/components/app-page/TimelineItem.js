import React from 'react';

export default function({ imageSrc, header, subtitle }) {
  return (
    <div className="timeline-item">
      <div className="timeline-icon">
        <img src={imageSrc} />
      </div>
      <div className="timeline-item-content">
        <h3>{header}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
