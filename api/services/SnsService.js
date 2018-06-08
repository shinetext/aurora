const AWS = require('aws-sdk');
const Promise = require('bluebird');
const sns = new AWS.SNS({
  accessKeyId: sails.config.globals.accessKeyId,
  secretAccessKey: sails.config.globals.secretAccessKey,
  region: sails.config.globals.serviceRegion,
});

module.exports = {
  publishEvent: (topic, eventData) => {
    const message = JSON.stringify(eventData);
    const snsParams = {
      Message: message,
      TopicArn: topic,
    };

    sns.publish(snsParams, (err, data) => {
      if (err) {
        sails.log.info(`An error occured publishing to SNS topic`, err.message);
      } else {
        sails.log.info('Successfully published to SNS topic', data);
      }
    });
  },
};
