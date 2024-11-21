const webpush = require("web-push");

// let result = webpush.generateVAPIDKeys();
// console.log({ result });
// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey:
    "BLGT3uloHwB_V6ozWLHJuux87VLnH5mlkgWNNqS1ZMNanGISbJWiMYkxYNopmC5Sv-aWljcSrjflaGpl6PMRTAY",
  privateKey: "8vzv0g3MH37mOPkP-jf4bMdnr2TncmGYOSoJtInJtbU",
};

webpush.setVapidDetails(
  "mailto:example@yourdomain.org",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/cdcL_l0dxgM:APA91bFPSXJhtkHhZFJfs6Q5OxYR2lPHE_uxP7eIVCcRFHnNkABtt9-A3cV5sMGW2HzggF90zklD1Ai89HAwb_IJMWpaa6CywHrMeNfGmp9NBlXD73wFDakJa8Qenqn5O9ISbXLXQyYs",
  expirationTime: null,
  keys: {
    p256dh:
      "BGc6yCWxlZ_umymloVxpoa2MgqSe6bwcfQtWQGOc3zFZJp42Ui74gAZnc4jcCAIqebodat5VwyowsP4fbijCNzE",
    auth: "Bxj4DxFPm0ljmncgTd5hyg",
  },
};
const v2 = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/fPuOmrAJ51Q:APA91bH_ktJHhB6vZnVwGLdUG6t3g6AlS3IE2droH8n_6gJo6EDvC9bIxp2kU99YqZ4XmYhZr3tl5fF1AqXfMk_5pET2aEmQuioG08P-ZFdpcZz89v7G09uMyVhzXVXSwQa2wPwYkFtU",
  expirationTime: null,
  keys: {
    p256dh:
      "BBFsy_WCbmsRVafani-Ktkium9MZUehvhxOVRCKnK87hP33gK_Z1qHPT_sl5vT5s-3XmNSTbt_Xp2w-RkBK0Fhg",
    auth: "3vTWyvpffnLdqZq8z9C4PA",
  },
};

webpush.sendNotification(pushSubscription, "Your Push Payload Text");
