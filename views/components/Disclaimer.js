import React from 'react';

export default props => {
  if (props.ctia) {
    return (
      <div className="ctia">
        Signing up means you agree to our <a href="/terms-of-service">Terms of Service</a>
        & <a href="/privacy-policy">Privacy Policy</a> and to receive our daily message. Message &
        data rates may apply. Text STOP to opt-out, HELP for help.
      </div>
    );
  }
  else if (props.scholarship) {
    return (
      <div className="ctia">
        Signing up means you agree to our{' '}
        <a href="/terms-of-service">Terms of Service</a>
        & <a href="/privacy-policy">Privacy Policy</a> and to receive our daily
        message.
        Message & data rates may apply. Text STOP to opt-out, HELP for help.
      </div>
    )
  }
  else {
    return;
  }
};
