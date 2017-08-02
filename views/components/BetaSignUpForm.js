import React from 'react';
import FormField from './FormField';

const BetaSignUpForm = props => {
  return (
    <div className="BetaSignUpForm">
      <fieldset>
        <FormField isRequired label="Name #1" type="text" fieldName="beta_name_1" value="" />
        <FormField isRequired label="Phone #1" type="tel" fieldName="beta_phone_1" value="" />
      </fieldset>
      <fieldset>
        <FormField isRequired label="Name #2" type="text" fieldName="beta_name_2" value="" />
        <FormField isRequired label="Phone #2" type="tel" fieldName="beta_phone_2" value="" />
      </fieldset>
      <fieldset>
        <FormField isRequired label="Name #3" type="text" fieldName="beta_name_3" value="" />
        <FormField isRequired label="Phone #3" type="tel" fieldName="beta_phone_3" value="" />
      </fieldset>
      <FormField type="hidden" fieldName="friends_opt_in_path" value={props.optin} />
    </div>
  );
};

export default BetaSignUpForm;
