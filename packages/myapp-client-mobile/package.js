Package.describe({
  name: 'myapp-client-mobile',
  version: '0.0.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.8.0.1');
  api.use('ecmascript');

  api.mainModule('client/index.js', 'web.cordova', { lazy: true });
  
});
