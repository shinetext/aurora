import React from 'react';

const CustomReferralInvite = ({ firstName, count, reward, referralCount }) => {
  let rewardImageSrc;
  if (count < 10) {
    rewardImageSrc = 'referral-reward-1.png';
  }
  return (
    <div>
      <h1>
        {firstName} Invites you to join shine
      </h1>
      <h2>
        Help {firstName} win a {reward}
      </h2>
      <div class="next-reward">
        <i class={rewardImageSrc}></i>
        <div class="next-reward-count"><div><span>{referralCount}</span>/{count}</div></div>
      </div>
    </div>
  );
};
export default CustomReferralInvite;
