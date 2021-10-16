var push = require("web-push");

let vapidKeys = {
  publicKey:
    "BJWActt-6ZsOSol4qlJGVgJs8giItG_YQ_I_bDIxpFyz5Qb9Ea-mAemiUabUm7Obch8HkLugi5qw9IxGeEPqTJ4",
  privateKey: "uJUXpIkfiasfBMqRcGf1j2HAchuaoXc1zuMJ7OSXx84",
};

push.setVapidDetails(
  "mailto:aman.tiwari@brightchamps.com",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

let sub = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/ei9ytMpPSds:APA91bHthiYtPn7MIN--bdzCoB0GlUkGf8sNxLsIG0usJ82CnN_sKfT5C8WVAZDH9JQbw7SdqW-PpnXimABo9NxQnfd45blF9hHjAYOODJx93os9mChTYJu4CfCe9LM4lsFQiN3p8cqi",
  expirationTime: null,
  keys: {
    p256dh:
      "BNjhtiwONVodUUFX5ypT490q9jHoxK6l7-Y_kxv1_hxpUI8WKiZTFC4zixnc4_398GdHJE3yWIjTKwkF7rlH9bQ",
    auth: "SnPzR7n86Da7SNw0G-4uIQ",
  },
};

const payload = JSON.stringify({
  title: "BrightChamps",
  body: "This notifications generated from a push.",
});

push
  .sendNotification(sub, payload)
  .then(function (res) {
    console.log(res);
  })
  .catch(function (error) {
    console.log(error);
  });
