Package.describe({
  name: 'myapp-api',
  version: '0.0.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.8.0.1');
  api.use('ecmascript');

  api.mainModule('modules/api.js', 'client');
  api.mainModule('server/index.js', 'server');

});
