import React from 'react';
import Image from './Image';
import SignUpForm from './SignUpForm';

class PartnerApp extends React.Component {
  render() {
    const { name, imageUrl, copy, partnerId } = this.props;
    const formDetails = {
      header: `${name}`,
      subhead: `${copy}`,
      partnerId: partnerId,
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
