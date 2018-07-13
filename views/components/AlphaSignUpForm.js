import React from 'react';
import FormField from './FormField';

const AlphaSignUpForm = props => {
  let emailField;
  if (props.emailRequired) {
    emailField = (
      <FormField
        isRequired
        label="Email"
        type="email"
        fieldName="email"
        value=""
      />
    );
  }

  return (
    <div className="AlphaSignUpForm">
      <FormField
        isRequired
        label="First Name"
        type="text"
        fieldName="first_name"
        value=""
      />
      <FormField
        isRequired
        label="Cell Number"
        type="tel"
        fieldName="phone"
        value=""
      />
      {emailField}
      <FormField type="hidden" fieldName="opt_in_path" value={props.optin} />
    </div>
  );
};

export default AlphaSignUpForm;
