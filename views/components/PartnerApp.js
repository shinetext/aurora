import React from 'react';
import Image from './Image';
import SignUpForm from './SignUpForm';

class PartnerApp extends React.Component {
  render() {
    const {
      name,
      imageUrl,
      copy,
      partnerId,
      campaignKeyBeta,
      additionalFields,
      additionalFormLink,
      betaCount,
      alphaEmailRequired,
      hideForm,
      signUpButtonText,
    } = this.props;
    const formDetails = {
      header: `${name}`,
      info: `${copy}`,
      partnerId: partnerId,
      betaOptInPath: campaignKeyBeta,
      extras: additionalFields,
      additionalLink: additionalFormLink,
      betaCount,
      alphaEmailRequired,
      hideForm,
      signUpButtonText,
    };

    return (
      <div className="container-partners-lead">
        <SignUpForm {...formDetails} />
        <Image src={imageUrl} />
      </div>
    );
  }
}

export default PartnerApp;
