import React, { Component } from 'react';
import Image from '../Image';
import AlphaSignUpForm from '../AlphaSignUpForm';
import FormField from '../FormField';

export default class CampaignApp extends Component {
  render() {
    const { name: header, imageUrl, copy: subhead, campaignId } = this.props;
    let subHeadView;
    if (subhead) {
      subHeadView = (
        <p>
          {subhead}
        </p>
      );
    }
    const alphaView = <AlphaSignUpForm optin={CampaignService.getOptInPath(campaignId)} />;
    return (
      <section className="container-partners-lead">
        <div className="container-signup col-md-7">
          <h2>
            {header}
          </h2>
          {subHeadView}
          <form class="signup-form" action="/join" method="post">
            {alphaView}
            <FormField type="hidden" fieldName="campaign" value={campaignId ? campaignId : null} />
            <div>
              <input
                is
                class="btn"
                type="submit"
                value="Get Shine Texts"
                ga-on="click"
                ga-event-category="SignUp"
                ga-event-action="SMS"
                ga-event-label={campaignId}
              />
            </div>
          </form>
        </div>
        <Image src={imageUrl} />
      </section>
    );
  }
}
