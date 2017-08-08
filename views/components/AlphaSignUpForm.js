import React from 'react';
import FormField from './FormField';

const AlphaSignUpForm = props => {
  return (
    <div className="AlphaSignUpForm">
      <FormField
        isRequired
        label="Your Name"
        type="text"
        fieldName="first_name"
        value=""
      />
      <FormField
        isRequired
        label="Your Cell Number"
        type="tel"
        fieldName="phone"
        value=""
      />
      <FormField type="hidden" fieldName="opt_in_path" value={props.optin} />
    </div>
  );
};

export default AlphaSignUpForm;
