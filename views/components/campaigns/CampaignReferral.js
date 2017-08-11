import React from 'react';
import BetaSignUpForm from '../BetaSignUpForm';
import FormField from '../FormField';
import Disclaimer from '../Disclaimer';

/**
 * Campaign Referral page
 */
export default ({ campaignId, campaignKeyBeta, referrerInfo, referralInfo }) => {
  return (
    <section className="container-partners-lead">
      <div className="container-signup col-md-6 col-md-offset-3">
        <div id="campaign-referral-container">
          <h3 className="-header">
            {referralInfo.header}
          </h3>
          <p className="-copy">
            {referralInfo.copy}
          </p>
          <form
            class="signup-form"
            action="/join"
            method="post"
          >
            <FormField type="hidden" fieldName="phone" value={referrerInfo.phone} />
            <FormField type="hidden" fieldName="campaign" value={campaignId ? campaignId : null} />
            <BetaSignUpForm showBeta={true} optin={campaignKeyBeta} />
            <div>
              <input
                is
                class="btn"
                type="submit"
                value="Enter"
                ga-on="click"
                ga-event-category="Refer"
                ga-event-action="SMS"
                ga-event-label={campaignId}
              />
            </div>
            <Disclaimer scholarship />
          </form>
        </div>
      </div>
    </section>
  );
};
