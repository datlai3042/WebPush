const webpush = require('web-push');


let result = webpush.generateVAPIDKeys()
console.log({result})
// VAPID keys should only be generated only once.
const vapidKeys = {
publicKey: 'BAJw6OLzvPeND1T6ZcU5CmCV8GMq5JxxrSqGwxuFAfVU86HL9xw31f-nCTHuF_8qOtYswbqMYJfKiJlFbEzAC34',
  privateKey: '5C60gkItEHcn9paB6SYWf2fri1_bZN2xXGZVzasc-Pw'
 };

webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  endpoint: '.....',
  keys: {
    auth: '.....',
    p256dh: '.....'
  }
};

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');


