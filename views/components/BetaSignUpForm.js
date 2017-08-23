import React from 'react';
import FormField from './FormField';

const BetaSignUpForm = ({ optin, betaCount }) => {
  let fieldViews = [];
  let defaultBetaCount = 3;
  // If a specific number of referral/beta fields are given. Check if betaCount is
  // 1 and singularize the header. Also loop over beta count and add FormFields.
  let PluralOrSingularFriends = betaCount == 1 ? 'Friend' : 'Friends';
  if (betaCount) {
    for (let i = 0; i < betaCount; i++) {
      fieldViews.push(
        <div className="friend-fields-container" key={i}>
          <FormField
            isRequired
            label={`Friend ${i + 1}'s First Name`}
            type="text"
            fieldName={`friends[${i}][first_name]`}
            value=""
          />
          <FormField
            isRequired
            label={`Friend ${i + 1}'s Cell Number`}
            type="tel"
            fieldName={`friends[${i}][phone]`}
            value=""
          />
        </div>
      );
    }
  } else {
    // If no specific number of referral/beta fields use the default number of fields.
    for (let i = 0; i < defaultBetaCount; i++) {
      fieldViews.push(
        <div className="friend-fields-container" key={i}>
          <FormField
            isRequired
            label={`Friend ${i + 1}'s First Name`}
            type="text"
            fieldName={`friends[${i}][first_name]`}
            value=""
          />
          <FormField
            isRequired
            label={`Friend ${i + 1}'s Cell Number`}
            type="tel"
            fieldName={`friends[${i}][phone]`}
            value=""
          />
        </div>
      );
    }
  }
  return (
    <div className="BetaSignUpForm">
      <h4>
        Share Shine with {betaCount || defaultBetaCount} {PluralOrSingularFriends}:
      </h4>
      {fieldViews}
    </div>
  );
};

export default BetaSignUpForm;
