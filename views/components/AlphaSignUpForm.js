import React from 'react';
import FormField from './FormField';

const AlphaSignUpForm = props => {
  return (
    <div className="AlphaSignUpForm">
      <FormField isRequired label="First Name" type="text" fieldName="first_name" value="" />
      <FormField isRequired label="Phone Number" type="tel" fieldName="phone" value="" />
    </div>
  );
};

export default AlphaSignUpForm;
