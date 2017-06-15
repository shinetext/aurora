import React from 'react';
import Image from './Image';
import SignUpForm from './SignUpForm';

class PartnerApp extends React.Component {
  render() {
    const { name, imageUrl, partnerId } = this.props;
    const formDetails = {
      header: `Hi, Im ${name}.`,
      subhead: `Get daily tips for self-fulfillment texted to you every morning.`,
      partner: partnerId
    }

    
    return (
      <div className="container-partners-lead">
        <Image src={imageUrl} />
        <SignUpForm  {...formDetails }/>
      </div>
    );
  }
}

export default PartnerApp;


// Form Component
      // input component
      // button component