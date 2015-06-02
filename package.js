Package.describe(
{
  name: 'didstopia:admzip',
  version: '0.0.1',
  git: 'https://github.com/Didstopia/meteor-admzip.git',
  documentation: 'README.md'
});

Npm.depends(
{
  'adm-zip': '0.4.7'
});

Package.onUse(function(api)
{
  api.versionsFrom('1.1.0.2');
  api.addFiles('admzip.js', 'server');
});

Package.onTest(function(api)
{
  api.use('tinytest');
  api.use('didstopia:admzip');
  api.addFiles('admzip-tests.js');
});
