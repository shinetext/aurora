import React from 'react';
import FormField from './FormField';

const BetaSignUpForm = ({ optin, betaCount }) => {
  const fieldViews = [];
  const defaultBetaCount = 3;
  // If a specific number of referral/beta fields are given. Check if betaCount is
  // 1 and singularize the header. Also loop over beta count and add FormFields.
  let pluralOrSingularFriends = betaCount == 1 ? 'Friend' : 'Friends';
  let numBetas = betaCount || defaultBetaCount;
    for (let i = 0; i < numBetas; i++) {
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
  return (
    <div className="BetaSignUpForm">
      <h4>
        Share Shine with {numBetas} {pluralOrSingularFriends}:
      </h4>
      {fieldViews}
    </div>
  );
};

export default BetaSignUpForm;
