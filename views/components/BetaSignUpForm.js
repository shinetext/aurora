import React from 'react';
import FormField from './FormField';

const BetaSignUpForm = ({ optin, betaCount }) => {
  const fieldViews = [];
  let headerViews;
  const defaultBetaCount = 3;
  // If a specific number of referral/beta fields are given. Check if betaCount is
  // 1 and singularize the header. Loop over beta count and add FormFields.
  let numBetas = betaCount || defaultBetaCount;
  if (numBetas <= 1) {
    headerViews = <h4>Share Shine with a Friend:</h4>;
  } else {
    headerViews = (
      <h4>
        Share Shine with {numBetas} Friends:
      </h4>
    );
  }
  for (let i = 0; i < numBetas; i++) {
    let nameLabel =
      numBetas > 1 ? `Friend ${i + 1}'s First Name` : "Your Friend's Name";
    let phoneLabel =
      numBetas > 1 ? `Friend ${i + 1}'s Cell Number` : "Your Friend's Number";
    fieldViews.push(
      <div className="friend-fields-container" key={i}>
        <FormField
          isRequired
          label={nameLabel}
          type="text"
          fieldName={`friends[${i}][first_name]`}
          value=""
        />
        <FormField
          isRequired
          label={phoneLabel}
          type="tel"
          fieldName={`friends[${i}][phone]`}
          value=""
        />
      </div>
    );
  }
  return (
    <div className="BetaSignUpForm">
      {headerViews}
      {fieldViews}
    </div>
  );
};

export default BetaSignUpForm;
