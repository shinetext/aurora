import React, { Component } from 'react';
import Image from '../Image';
import AlphaSignUpForm from '../AlphaSignUpForm';
import FormField from '../FormField';
import PartnerLogo from './PartnerLogo';
import Disclaimer from '../Disclaimer';
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
      <section className="container-campaigns-lead">
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
          <Disclaimer ctia />
          <div className="campaign-partner-logo-container">
            <PartnerLogo src="http://www.hercampus.com/sites/all/themes/hcxo/images/HerCampusLogo.jpg" />
            <PartnerLogo src="http://www.themixedexperience.com/wp-content/uploads/2016/09/shine-logo.png" />
            <PartnerLogo src="http://www.themixedexperience.com/wp-content/uploads/2016/09/shine-logo.png" />
            <PartnerLogo src="https://vignette4.wikia.nocookie.net/rickandmorty/images/f/f4/Rick_and_Morty_Logo_and_Image.png/revision/latest?cb=20151017201849&format=original" />
          </div>
        </div>
        <Image src={imageUrl} />
      </section>
    );
  }
}
