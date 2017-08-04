import React from 'react';
import BetaSignUpForm from '../BetaSignUpForm';
import FormField from '../FormField';

export default ({campaignId, campaignKeyBeta, campaignKey, referrerInfo}) => {
  return (
    <section className="container-partners-lead">
      <div className="container-signup col-md-6 col-md-offset-3">
        <form class="signup-form" action="https://secure.mcommons.com/profiles/join" method="post">
          <FormField type="hidden" fieldName="redirect_to" value={`http://localhost:1337/confirmation?campaign=flipside&referralCode=${referrerInfo.referralCode}`} />
          <FormField type="hidden" fieldName="opt_in_path" value={campaignKey} />
          <FormField type="hidden" fieldName="referer" value={referrerInfo.referralCode} />
          <FormField type="hidden" fieldName="person[first_name]" value={referrerInfo.firstName} />
          <FormField type="hidden" fieldName="person[phone]" value={referrerInfo.phone} />
          <BetaSignUpForm showBeta={true} optin={campaignKeyBeta} />
          <div>
            <input
              is
              class="btn"
              type="submit"
              value="Share the Love"
              ga-on="click"
              ga-event-category="Refer"
              ga-event-action="SMS"
              ga-event-label={campaignId}
            />
          </div>
        </form>
      </div>
    </section>
  )
}
