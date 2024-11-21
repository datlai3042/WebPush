const webpush = require("web-push");

// let result = webpush.generateVAPIDKeys();
// console.log({ result });
// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey:
    "BPazQquhXWBJuKfzo3Tz_h9nhSYnb2A9KRC3LgDrPl4giz-OmLg3SjrlDkc_eoAocW3Ty204LBEq5Z5_5SF79Ik",
  privateKey: "c2ktsUElSe189lexuqbeYpWME2_KU23aZpf85iBQy70",
};

webpush.setVapidDetails(
  "mailto:example@yourdomain.org",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/djvZlVXKe9A:APA91bFfJc2fJo33bo6_kR0PKlc2yFA3B9yz2XlW4i9htG4tKuuHJ0_0PDrObLXo9Vbm0syBa_o-L8OXhrMiW0ROs93KRUHmQovIDSlT_EDKKEats3-oRpbEFTOvLQZ5uz8Rl6cXg8Vf",
  expirationTime: null,
  keys: {
    p256dh:
      "BC-MfglhBpT53fCom5DNzdVjlNmXLnXqAK7Qf-xpKG-IYkD94miTLtnMpwHZ1A2uM8ccajGk81FC3IGVrbrJkj8",
    auth: "DKbidcGsr-anyN_Iy8qK0Q",
  },
};

webpush.sendNotification(pushSubscription, "Your Push Payload Text");
