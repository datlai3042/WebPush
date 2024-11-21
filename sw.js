const title = 'Actions Notification';

const options = {
  actions: [
    {
      action: 'coffee-action',
      type: 'button',
      title: 'Coffee',
      icon: '/images/demos/action-1-128x128.png',
    },
    {
      action: 'doughnut-action',
      type: 'button',
      title: 'Doughnut',
      icon: '/images/demos/action-2-128x128.png',
    },
    {
      action: 'gramophone-action',
      type: 'button',
      title: 'Gramophone',
      icon: '/images/demos/action-3-128x128.png',
    },
    {
      action: 'atom-action',
      type: 'button',
      title: 'Atom',
      icon: '/images/demos/action-4-128x128.png',
    },
  ],
};

self.addEventListener('push', () => {
  self.registration.showNotification(title, options);
});
