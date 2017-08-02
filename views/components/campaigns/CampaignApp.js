import React, { Component } from 'react';
import Image from '../Image';
import SignUpForm from '../SignUpForm';

export default class CampaignApp extends Component {
  render() {
    const { name, imageUrl, copy, campaignId } = this.props;
    const formDetails = {
      header: `${name}`,
      subhead: `${copy}`,
      campaignId: campaignId,
    };
    return (
      <div>
        <section className="container-partners-lead">
          <SignUpForm {...formDetails} />
          <Image src={imageUrl} />
        </section>
      </div>
    );
  }
}
