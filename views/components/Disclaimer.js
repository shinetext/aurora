import React from 'react';

export default ({ customHtml }) => {
  const defaultHtml = `Signing up means you agree to our <a href="/terms-of-service">Terms of Service</a> & <a href="/privacy-policy">Privacy Policy</a> and to receive our daily message. Message & data rates may apply. Text STOP to opt-out, HELP for help.`;
  const html = customHtml || defaultHtml;
  return <div className="ctia" dangerouslySetInnerHTML={{ __html: html }} />;
};
