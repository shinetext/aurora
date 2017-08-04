import React from 'react';
import BetaSignUpForm from '../BetaSignUpForm';
import FormField from '../FormField';

export default ({campaignId}) => {
  return (
    <section className="container-partners-lead">
      <div className="container-signup col-md-4 col-md-offset-4">
        <BetaSignUpForm showBeta={true} optin={CampaignService.getBetaOptInPath(campaignId)}/>
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
      </div>
    </section>
  )
}
