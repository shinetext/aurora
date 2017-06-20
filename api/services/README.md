#Partner Microsite Configuration

To add a new partner/influencer microsite, add a new key to `partnersData` in `services/partnersData.js` with the following attributes: 

```
const partnersData = {
  [PARTNER_NAME_ROUTE_PARAM]: {
    name: 'Partner name',
    imageUrl: 'http://partner_image_url_string',
    copy: 'Landing page copy',
    confirmation: {
      image: 'http://partner_confirmation_image_url_string',
      copy: 'confirmation copy'
    },
    campaignKey: 'Mobile Commons partner opt-in path key'
  }
};
```

##Test Partner Route

```
http://SHINETEXT_BASE_URL/partners/partnername
http://SHINETEXT_BASE_URL/p/partnername
```