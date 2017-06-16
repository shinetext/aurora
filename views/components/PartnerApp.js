import React from 'react';
import Image from './Image';
import SignUpForm from './SignUpForm';

class PartnerApp extends React.Component {
  render() {
    const { name, imageUrl, partnerId } = this.props;
    const formDetails = {
      header: `${name}`,
      subhead: `Lorem ipsum dolor sit amet, proin metus morbi nonummy, vitae dictum, aliquam integer molestie commodo elementum. Ac aliquet placerat tempus ligula, suspendisse vestibulum consequat ac praesent, sodales in nulla, sed potenti.`,
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