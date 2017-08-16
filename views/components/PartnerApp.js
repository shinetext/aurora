import React from 'react';
import Image from './Image';
import SignUpForm from './SignUpForm';
import PartnerService from '../../api/services/PartnerService';

//@TODO Remove hard-code partner string and get from window.location url param
const partner = PartnerService.getPartner('rydel');


class PartnerApp extends React.Component {
    
  constructor(props) {
    super(props)
    this.state = { isMounted: false, partner };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    console.log('component did mount');
    this.setState({
      isMounted: true, partner
    })
  }
  
  handleClick() {
    console.log('clicked');
  }
  
  render() {
    const {
      name,
      imageUrl,
      copy,
      partnerId,
      campaignKeyBeta,
      additionalFields,
      additionalFormLink,
    } = this.state.partner;
    console.log('partnr:', this.state.partner);
    const formDetails = {
      header: `${name}`,
      info: `${copy}`,
      partnerId: 'rydel',
      betaOptInPath: campaignKeyBeta,
      extras: additionalFields,
      additionalLink: additionalFormLink,
    };
    
    return (
      <div className="container-partners-lead">
        <SignUpForm {...formDetails} />
        <Image src={imageUrl} />
        <button onClick={this.handleClick}>Submit</button>
      </div>
      
    );
  }
}

export default PartnerApp;

