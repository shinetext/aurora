const AWS = require('aws-sdk');
const Promise = require('bluebird');
const sns = new AWS.SNS({
  region: process.env.SERVICE_REGION,
});
Promise.promisifyAll(sns);

const Sns = {
  publishEvent: (topic, eventData) => {
    const message = JSON.stringify(eventData);
    const snsParams = {
      Message: message,
      TopicArn: topic,
    };

    sns.publish(snsParams, (err, data) => {
      if (err) {
        console.log(`An error occured publishing to SNS topic`, err.message);
      } else {
        console.log('Successfully published to SNS topic', data);
      }
    });
  },
};

module.exports = Sns;
