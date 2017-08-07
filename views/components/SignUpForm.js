import React from 'react';
import AlphaSignUpForm from './AlphaSignUpForm';
import BetaSignUpForm from './BetaSignUpForm';
import FormField from './FormField';

const SignUpForm = props => {
  const { header, subhead, partnerId, hideAlpha, betaOptInPath, extras } = props;
  let subHeadView;
  if (subhead) {
    subHeadView = <p>{subhead}</p>;
  }

  let alphaView;
  if (!hideAlpha) {
    alphaView = <AlphaSignUpForm optin={PartnerService.getOptInPath(partnerId)} />;
  }

  let betaView;
  if (betaOptInPath) {
    betaView = <BetaSignUpForm optin={betaOptInPath} />;
  }

  let extrasView = [];
  if (extras) {
    let count = 0;
    for (const extra of extras) {
      extrasView.push(
        <FormField
          key={`extras-${count}`}
          type={extra.type}
          fieldName={`extras[${extra.name}]`}
          label={extra.label}
          value={extra.value}
        />
      );
      count++;
    }
  }

  return (
    <div className="SignUpForm col-md-7">
      <div className="container-signup">

        <h2>{header}</h2>
        {subHeadView}

        <form class="signup-form" action="/join" method="post">
          {alphaView}
          {betaView}
          {extrasView}

          <FormField type="hidden" fieldName="partner" value={partnerId ? partnerId : null} />
          <div>
            <input
              is
              class="btn"
              type="submit"
              value="Get Shine Texts"
              ga-on="click"
              ga-event-category="SignUp"
              ga-event-action="SMS"
              ga-event-label={partnerId}
            />
          </div>
        </form>

        <div className="ctia">
          Signing up means you agree to our{' '}
          <a href="/terms-of-service">Terms of Service</a>
          & <a href="/privacy-policy">Privacy Policy</a> and to receive our daily
          message.
          Message & data rates may apply. Text STOP to opt-out, HELP for help.
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
