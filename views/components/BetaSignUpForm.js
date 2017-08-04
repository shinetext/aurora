import React from 'react';
import FormField from './FormField';

const BetaSignUpForm = props => {
  return (
    <div className="BetaSignUpForm">
      <h4>Friend invites:</h4>
      <div className="friend-fields-container">
        <FormField
          isRequired
          label="Name #1"
          type="text"
          fieldName="friends[0][first_name]"
          value=""
        />
        <FormField isRequired label="Phone #1" type="tel" fieldName="friends[0][phone]" value="" />
      </div>
      <div className="friend-fields-container">
        <FormField
          isRequired
          label="Name #2"
          type="text"
          fieldName="friends[1][first_name]"
          value=""
        />
        <FormField isRequired label="Phone #2" type="tel" fieldName="friends[1][phone]" value="" />
      </div>
      <div className="friend-fields-container">
        <FormField
          isRequired
          label="Name #3"
          type="text"
          fieldName="friends[2][first_name]"
          value=""
        />
        <FormField isRequired label="Phone #3" type="tel" fieldName="friends[2][phone]" value="" />
      </div>
      <FormField type="hidden" fieldName="friends_opt_in_path" value={props.optin} />
    </div>
  );
};

export default BetaSignUpForm;
