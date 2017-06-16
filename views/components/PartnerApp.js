import React from 'react';
import Image from './Image';
import SignUpForm from './SignUpForm';

class PartnerApp extends React.Component {
  render() {
    const { name, imageUrl, partnerId } = this.props;
    const formDetails = {
      header: `Hi, I'm ${name}.`,
      subhead: `Get daily tips for self-fulfillment texted to you every morning.`,
      partner: partnerId
    }

    
    return (
      <div className="container-partners-lead">
        <SignUpForm  {...formDetails }/>
        <Image src={imageUrl} />
      </div>
    );
  }
}

export default PartnerApp;


// Form Component
      // input component
      // button component