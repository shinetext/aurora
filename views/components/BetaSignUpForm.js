import React from 'react';
import FormField from './FormField';

const BetaSignUpForm = props => {
  return (
    <div className="BetaSignUpForm">
      <h4>Share Shine with 3 Friends:</h4>
      <div className="friend-fields-container">
        <FormField
          isRequired
          label="Friend 1's First Name"
          type="text"
          fieldName="friends[0][first_name]"
          value=""
        />
        <FormField
          isRequired
          label="Friend 1's Cell Number"
          type="tel"
          fieldName="friends[0][phone]"
          value=""
        />
      </div>
      <div className="friend-fields-container">
        <FormField
          isRequired
          label="Friend 2's First Name"
          type="text"
          fieldName="friends[1][first_name]"
          value=""
        />
        <FormField
          isRequired
          label="Friend 2's Cell Number"
          type="tel"
          fieldName="friends[1][phone]"
          value=""
        />
      </div>
      <div className="friend-fields-container">
        <FormField
          isRequired
          label="Friend 3's First Name"
          type="text"
          fieldName="friends[2][first_name]"
          value=""
        />
        <FormField
          isRequired
          label="Friend 3's Cell Number"
          type="tel"
          fieldName="friends[2][phone]"
          value=""
        />
      </div>
      <FormField
        type="hidden"
        fieldName="friends_opt_in_path"
        value={props.optin}
      />
    </div>
  );
};

export default BetaSignUpForm;
