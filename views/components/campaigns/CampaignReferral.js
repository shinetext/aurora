import React from 'react';
import BetaSignUpForm from '../BetaSignUpForm';
import FormField from '../FormField';
import Disclaimer from '../Disclaimer';

/**
 * Campaign Referral page
 */
export default ({
  campaignId,
  campaignKeyBeta,
  referrerInfo,
  referralInfo,
  additionalFormLink,
}) => {
  let additionalLinkView;
  if (additionalFormLink) {
    additionalLinkView = (
      <a className="additional-link" href={additionalFormLink.link}>
        {additionalFormLink.label}
      </a>
    );
  }
  return (
    <section className="container-partners-lead">
      <div className="container-signup col-md-6 col-md-offset-3">
        <div id="campaign-referral-container">
          <h3 className="-header">
            {referralInfo.header}
          </h3>
          <p
            className="-copy"
            dangerouslySetInnerHTML={{ __html: referralInfo.copy }}
          />
          <form class="signup-form" id="beta-signup" action="/join" method="post">
            <FormField
              type="hidden"
              fieldName="phone"
              value={referrerInfo.phone}
            />
            <FormField
              type="hidden"
              fieldName="campaign"
              value={campaignId ? campaignId : null}
            />
            <BetaSignUpForm showBeta={true} optin={campaignKeyBeta} />
            <div>
              <input
                is
                class="btn"
                type="submit"
                value={referralInfo.buttonCopy}
                ga-on="click"
                ga-event-category="Refer"
                ga-event-action="SMS"
                ga-event-label={campaignId}
              />
            </div>
            <Disclaimer />
            {additionalLinkView}
          </form>
        </div>
      </div>
    </section>
  );
};
