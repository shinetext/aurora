import React from 'react';
import AlphaSignUpForm from './AlphaSignUpForm';
import BetaSignUpForm from './BetaSignUpForm';
import FormField from './FormField';

const SignUpForm = props => {
  const { header, subhead, partnerId, hideAlpha, showBeta } = props;
  let subHeadView;
  if (subhead) {
    subHeadView = <p>{subhead}</p>;
  }

  let alphaView;
  if (!hideAlpha) {
    alphaView = <AlphaSignUpForm optin={PartnerService.getOptInPath(partnerId)} />;
  }

  let betaView;
  if (showBeta) {
    betaView = <BetaSignUpForm optin={PartnerService.getBetaOptInPath(partnerId)} />;
  }

  return (
    <div className="container-signup col-md-7">

      <h2>{header}</h2>
      {subHeadView}

      <form class="signup-form" action="/join" method="post">
        {alphaView}
        {betaView}

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
  );
};

export default SignUpForm;
