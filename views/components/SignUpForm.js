import React from 'react';
import AlphaSignUpForm from './AlphaSignUpForm';
import BetaSignUpForm from './BetaSignUpForm';
import FormField from './FormField';
import Disclaimer from './Disclaimer';

const SignUpForm = props => {
  const {
    header,
    info,
    partnerId,
    hideAlpha,
    betaOptInPath,
    extras,
    additionalLink,
    betaCount,
    alphaEmailRequired,
    signUpButtonText,
  } = props;

  let infoView;
  if (info) {
    infoView = (
      <div className="info" dangerouslySetInnerHTML={{ __html: info }} />
    );
  }

  let alphaView;
  if (!hideAlpha) {
    alphaView = (
      <AlphaSignUpForm
        optin={PartnerService.getOptInPath(partnerId)}
        emailRequired={alphaEmailRequired}
      />
    );
  }

  let betaView;
  if (betaOptInPath) {
    betaView = <BetaSignUpForm betaCount={betaCount} optin={betaOptInPath} />;
  }

  let extrasView = [];
  if (extras) {
    let count = 0;
    for (const extra of extras) {
      extrasView.push(
        <FormField
          key={`extras-${count}`}
          type={extra.type}
          fieldName={`extras[${extra.name}]`}
          label={extra.label}
          value={extra.value}
        />
      );
      count++;
    }
  }

  let additionalLinkView;
  if (additionalLink) {
    additionalLinkView = (
      <a className="additional-link" href={additionalLink.link}>
        {additionalLink.label}
      </a>
    );
  }

  return (
    <div className="SignUpForm col-md-7">
      <div className="container-signup">
        <h2 dangerouslySetInnerHTML={{ __html: header }} />
        {infoView}

        <form
          class="signup-form"
          id="alpha-signup"
          action="/join"
          method="post"
        >
          {alphaView}
          {betaView}
          {extrasView}

          <FormField
            type="hidden"
            fieldName="partner"
            value={partnerId ? partnerId : null}
          />
          <div>
            <input
              is
              class="btn"
              type="submit"
              value={signUpButtonText || 'Get Shine Texts'}
              ga-on="click"
              ga-event-category="SignUp"
              ga-event-action="SMS"
              ga-event-label={partnerId}
            />
          </div>
        </form>
        <Disclaimer />
        {additionalLinkView}
      </div>
    </div>
  );
};

export default SignUpForm;
