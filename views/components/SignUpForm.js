import React from 'react';
import FormField from './FormField';

const SignUpForm = props => {
  const { header, subhead, partner } = props;
  
  return (
    <div className="col-md-7">
      <div className="container-signup">
      
        <h2>{header}</h2>
        <h4>{subhead}</h4>
        
        <form action="/join" method="post">
          <FormField isRequired label='First Name' type="text" fieldName='first_name'/>
          <FormField isRequired label='Phone Number' type="tel" fieldName='phone'/>
          <FormField type="hidden" fieldName='partner' value={ props.partner ? props.partner : null } />
          <div>
            <input className="btn" type="submit" value="Get Shine Texts"
              ga-on="click"
              ga-event-category="SignUp"
              ga-event-action="SMS"
              ga-event-label="<%- partnerName %>"/>
          </div>
        </form>

        <div className="ctia">
          Signing up means you agree to our <a href="/terms-of-service">Terms of Service</a>
          & <a href="/privacy-policy">Privacy Policy</a> and to receive our daily message.
          Message & data rates may apply. Text STOP to opt-out, HELP for help.
        </div>

      </div>
    </div>
  );
  
}
  
export default SignUpForm;